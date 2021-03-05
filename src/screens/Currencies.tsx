import React, { Dispatch, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBitcoinPrice } from '../store/slices/bitcoin-slice';
import {
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

const Currencies: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const { data: { isDataUploaded, bitcoinData: { time: { updatedISO }, bpi: { EUR, GBP, USD } } }, isFetching, error } = useSelector((state: IInitialState) => state.bitcoin);
    const { t }: { t: TFunction } = useTranslation();

    const formatterEUR = new Intl.NumberFormat('en-LT', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2
    });

    const formatterUSD = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });

    const formatterGBP = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 2
    });

    useEffect(() => {
        dispatch(getBitcoinPrice());
        setInterval(async () => {
            dispatch(getBitcoinPrice());
        }, 10000);
    }, []);

    return (
        <Container
            maxWidth='xs'
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
                    {isDataUploaded &&
                    <div className='commentWrapper'>
                        <p className='comment'>{t('currenciesScreen.comment')}</p>
                        <p className='comment'>{moment(updatedISO).format('YYYY-MM-DD HH:mm')}</p>
                    </div>
                    }
                    {
                        isFetching && <CircularProgress className='marginLeft' size={15} />
                    }
                </div>
                {isDataUploaded
                    ?
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow color={Colors.background}>
                                    <TableCell className='cellWrapper'>{t('currenciesScreen.column1')}</TableCell>
                                    <TableCell>{t('currenciesScreen.column2')}</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell className='cellWrapper'>{EUR.code}</TableCell>
                                    <TableCell>{formatterEUR.format(EUR.rate_float)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className='cellWrapper'>{GBP.code}</TableCell>
                                    <TableCell>{formatterGBP.format(GBP.rate_float)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className='cellWrapper'>{USD.code}</TableCell>
                                    <TableCell>{formatterUSD.format(USD.rate_float)}</TableCell>
                                </TableRow>
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
