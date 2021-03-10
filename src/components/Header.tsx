import * as React from 'react'
import { Paths } from '../utils/constants/Paths';
import { Grid, Link } from '@material-ui/core';
import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

const Header: React.FC = () => {
    const { ANALYSIS_PATH, CURRENCIES_PATH }: { ANALYSIS_PATH: string, CURRENCIES_PATH: string } = Paths;
    const { t }: { t: TFunction } = useTranslation();
    let history = useHistory();

    const handleClick = (url: string) => {
        history.push(url);
    };

    return (
        <header className='appHeader'>
            <Grid
                container
                direction='row'
                alignItems='center'
            >
                <Grid item lg={9} md={8} sm={7} xs={8}>
                    <h3>{t('header.title')}</h3>
                </Grid>
                <Grid item lg={3} md={4} sm={5} xs={4}>
                    <Grid container direction='row' justify='flex-start'>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <Link onClick={() => handleClick(CURRENCIES_PATH)}>{t('header.currencies')}</Link>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <Link onClick={() => handleClick(ANALYSIS_PATH)}>{t('header.analysis')}</Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </header>
    )
};

export default Header;
