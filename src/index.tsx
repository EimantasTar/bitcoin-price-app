import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './i18n';
import App from './app/App';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') || document.createElement('div')); // for testing purposes
