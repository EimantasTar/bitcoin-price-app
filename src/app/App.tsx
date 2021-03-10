import { hot } from 'react-hot-loader';
import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Currencies from '../screens/Currencies';
import { Paths } from '../utils/constants/Paths';
import Analysis from '../screens/Analysis';
import Header from '../components/Header';

const App: React.FC = () => {
    const { ANALYSIS_PATH, CURRENCIES_PATH }: { ANALYSIS_PATH: string, CURRENCIES_PATH: string } = Paths;

    return (
        <div>
            <Router>
                <Header />
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
