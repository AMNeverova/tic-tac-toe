import './src/styles/main.scss';
import React from 'react';
import ReactDOM from "react-dom";
import App from './src/components/App';
import store from './src/redux/store';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_ru from 'react-intl/locale-data/ru';

addLocaleData(locale_ru);
addLocaleData(locale_en);

    ReactDOM.render((
        <HashRouter>
            <Provider store={store}>
                    <App />
            </Provider>
        </HashRouter>
    ), document.querySelector('.root'));
