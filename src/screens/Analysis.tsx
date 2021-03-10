import React, { Dispatch, FormEvent, useState } from 'react';
import {
    Button, CircularProgress,
    Container,
    FormControl,
    Grid,
    Input,
    InputLabel,
    Paper,
    Table, TableBody, TableCell, TableContainer,
    TableHead,
    TableRow
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getDocumentInfo } from '../store/slices/document-slice';
import { IInitialState } from '../store/initial-state';
import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';
import { Colors } from '../utils/constants/Colors';

const Analysis: React.FC = () => {
    const [url, setUrl] = useState<string>('');
    const { t }: { t: TFunction } = useTranslation();
    const dispatch: Dispatch<any> = useDispatch();
    const {
        isFetching, data: { allUniqueTags, mostUsedTagInfo: { tagName, usedTimes, path, count } }, error
    } = useSelector((state: IInitialState) => state.document);

    const handleChange = ({ target: { value } }: { target: { value: string } }) => {
        setUrl(value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (url) {
            dispatch(getDocumentInfo(url));
        }
    };

    return (
        <Container
            maxWidth='md'
            className='screenWrapper'
        >
            <Grid container justify='center'>
                <h2 className='title'>{t('analysisScreen.title')}</h2>
                <div className='spacer2' />
            </Grid>
            <Container>
                <Grid>
                    {
                        error && <p className='errorMessage'>{error}</p>
                    }
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <FormControl fullWidth={true}>
                            <InputLabel>{t('analysisScreen.label')}</InputLabel>
                            <Input id='url' type='text' onChange={handleChange} />
                        </FormControl>
                        <Grid className='formButtonWrapper' container justify='center'>
                            <Button
                                type="submit"
                                variant='outlined'
                            >
                                {t('analysisScreen.buttonSubmit')}
                            </Button>
                            {isFetching
                                ?
                                <CircularProgress className='marginLeft' size={30} />
                                :
                                <div className='spacer2' />
                            }
                        </Grid>
                    </form>
                </Grid>
            </Container>
            <Container>
                {allUniqueTags && allUniqueTags.length > 0 &&
                <TableContainer component={Paper} className='tableWrapper'>
                    <Table>
                        <TableHead>
                            <TableRow className='rowWrapper' color={Colors.background}>
                                <TableCell className='cellWrapper customWidth'>
                                    <Grid container justify='space-between' alignItems='center' direction='row'>
                                        <div>
                                            {t('analysisScreen.column1')}
                                        </div>
                                    </Grid>
                                </TableCell>
                                <TableCell>
                                    <Grid container justify='space-between' alignItems='center' direction='row'>
                                        <div>
                                            {t('analysisScreen.column2')}
                                        </div>
                                    </Grid>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell className='cellWrapper'>{t('analysisScreen.row1')}</TableCell>
                                <TableCell>{allUniqueTags.map(item => {
                                    return `<${item}/> `
                                })}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className='cellWrapper'>{t('analysisScreen.row2')}</TableCell>
                                <TableCell>{`<${tagName}/>`}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className='cellWrapper'>{t('analysisScreen.row3')}</TableCell>
                                <TableCell>{usedTimes}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className='cellWrapper'>{t('analysisScreen.row4')}</TableCell>
                                <TableCell>{path}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className='cellWrapper'>{t('analysisScreen.row5')}</TableCell>
                                <TableCell>{count}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                }
            </Container>
        </Container>
    )
};

export default Analysis;
