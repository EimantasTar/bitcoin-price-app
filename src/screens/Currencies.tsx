import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBitcoinPrice } from '../store/slices/bitcoin-slice';
import {
    Button,
    CircularProgress,
    Container,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@material-ui/core';
import { IInitialState } from '../store/initial-state';
import { Colors } from '../utils/constants/Colors';
import moment from 'moment';
import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Currency } from '../store/types/bitcoin-state';
import { Formatter } from '../utils/functions/formatter';
import { sortArrAscending, sortArrDescending } from '../utils/functions/sorting';
import { Dispatch, useEffect, useState } from 'react';

const Currencies: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const [isAscending, setIsAscending] = useState<boolean>(false);
    const [isDescending, setIsDescending] = useState<boolean>(false);
    const [btcData, setBtcData] = useState<Currency[]>([]);
    const {
        data: { isDataUploaded, bitcoinData: { time: { updatedISO }, bpi } },
        isFetching,
        error
    } = useSelector((state: IInitialState) => state.bitcoin);
    const { t }: { t: TFunction } = useTranslation();
    const { EUR, GBP, USD } = Formatter;

    const handleAsc = () => {
        if (!isAscending && !isDescending && bpi && bpi.length > 1) {
            const data: Currency[] = sortArrAscending(bpi);
            setBtcData(data);
            setIsAscending(true);
        } else if (isAscending && bpi && bpi.length > 1) {
            const data = sortArrDescending(bpi);
            setBtcData(data);
            setIsAscending(false);
            setIsDescending(true);
        } else if (isDescending && bpi && bpi.length > 1) {
            const data: Currency[] = sortArrAscending(bpi);
            setBtcData(data);
            setIsAscending(true);
            setIsDescending(false);
        }
    };

    const prepareValue = (item: Currency) => {
        const { code, rate_float } = item;
        if (code === 'EUR') {
            return EUR.format(rate_float);
        }
        if (code === 'GBP') {
            return GBP.format(rate_float);
        }
        if (code === 'USD') {
            return USD.format(rate_float);
        } else return rate_float;
    };

    useEffect(() => {
        if (isAscending && bpi && bpi.length > 1) {
            const btcData = sortArrAscending(bpi);
            setBtcData(btcData);
        } else if (isDescending && bpi && bpi.length > 1) {
            const btcData: Currency[] = sortArrDescending(bpi);
            setBtcData(btcData);
        } else if (bpi && bpi.length > 0) {
            setBtcData(bpi);
        }
    }, [bpi]);

    useEffect(() => {
        dispatch(getBitcoinPrice());
        const interval = setInterval(async () => {
            dispatch(getBitcoinPrice());
        }, 10000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <Container
            maxWidth='sm'
            className='screenWrapper'
        >
            <Grid container justify='center'>
                <h2 className='title'>{t('currenciesScreen.title')}</h2>
            </Grid>
            <Container>
                {
                    error && <p className='errorMessage'>{error}</p>
                }
                <div className='commentWrapper'>
                    {isDataUploaded && btcData && btcData.length > 0 &&
                    <div className='commentWrapper'>
                        <p className='comment'>{t('currenciesScreen.comment')}</p>
                        <p className='comment'>{moment(updatedISO).format('YYYY-MM-DD HH:mm')}</p>
                    </div>
                    }
                    {
                        isFetching && <CircularProgress className='marginLeft' size={15} />
                    }
                </div>
                {isDataUploaded && btcData && btcData.length > 0
                    ?
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow className='rowWrapper' color={Colors.background}>
                                    <TableCell className='cellWrapper'>
                                        <Grid container justify='space-between' alignItems='center' direction='row'>
                                            <div>
                                                {t('currenciesScreen.column1')}
                                            </div>
                                            <div className='spacer' />
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                        <Grid container justify='space-between' alignItems='center' direction='row'>
                                            <div>
                                                {t('currenciesScreen.column2')}
                                            </div>
                                            <Button size='small' onClick={handleAsc}>
                                                {
                                                    !isAscending && !isDescending &&
                                                    <Grid container direction='column' alignItems='center'>
                                                        <ArrowDropUpIcon fontSize='small' />
                                                        <ArrowDropDownIcon fontSize='small' />
                                                    </Grid>
                                                }
                                                {
                                                    isAscending && !isDescending &&
                                                    <Grid container direction='column' alignItems='center'>
                                                        <ArrowDropUpIcon fontSize='small' />
                                                    </Grid>
                                                }
                                                {
                                                    !isAscending && isDescending &&
                                                    <Grid container direction='column' alignItems='center'>
                                                        <ArrowDropDownIcon fontSize='small' />
                                                    </Grid>
                                                }
                                            </Button>
                                        </Grid>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    btcData.length && btcData.map((item: Currency) =>
                                        <TableRow key={item.code}>
                                            <TableCell className='cellWrapper'>{item.code}</TableCell>
                                            <TableCell>{prepareValue(item)}</TableCell>
                                        </TableRow>
                                    )
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    :
                    <div />
                }
            </Container>
        </Container>
    )
};

export default Currencies;
