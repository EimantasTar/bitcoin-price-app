import { hot } from 'react-hot-loader';
import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import Currencies from '../screens/Currencies';
import { Paths } from '../utils/constants/Paths';
import Analysis from '../screens/Analysis';

const App = () => {
    const { ANALYSIS_PATH, CURRENCIES_PATH }: { ANALYSIS_PATH: string, CURRENCIES_PATH: string } = Paths;

    return (
        <div>
            <Router>
                <header className='appHeader'>
                    <Link className='link' to={CURRENCIES_PATH}>Currencies</Link>
                    <Link className='link' to={ANALYSIS_PATH}>Analysis</Link>
                </header>
                <Switch>
                    <Route
                        path='/'
                        exact={true}
                    >
                        <Redirect to={CURRENCIES_PATH} />
                    </Route>
                    <Route
                        path={CURRENCIES_PATH}
                        exact={true}
                        component={Currencies}
                    />
                    <Route
                        path={ANALYSIS_PATH}
                        exact={true}
                        component={Analysis}
                    />
                </Switch>
            </Router>
        </div>
    );
}

export default hot(module)(App);
