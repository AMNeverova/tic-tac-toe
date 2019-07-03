import './src/styles/main.scss';
import React from 'react';
import ReactDOM from "react-dom";
import App from './src/components/App';
import store from './src/redux/store';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

    ReactDOM.render((
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    ), document.querySelector(".root"));


