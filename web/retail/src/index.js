import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppLogin from './AppLogin';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import reducer from './store/reducers/auth';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {get_is_logged_in} from './API/onDemandReading';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter } from 'react-router-dom'

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
const store = createStore(reducer, composeEnhances(
    applyMiddleware(thunk)
  ));

const app = (
    <CookiesProvider>
        <BrowserRouter>
            <Provider  store = {store}>
                <App />
            </Provider>
        </BrowserRouter>
    </CookiesProvider>
);
  
const app_login = (
    <CookiesProvider>
        <BrowserRouter>
            <Provider store = {store}>
                <AppLogin />
            </Provider>
        </BrowserRouter>
    </CookiesProvider>
);

if(localStorage.getItem('token') !== null && get_is_logged_in() === true) {
    console.log('its in app');
    ReactDOM.render(app, document.getElementById('root'));
} else {
    localStorage.setItem('token', null);
    ReactDOM.render(app_login, document.getElementById('root'));
    console.log('its in login');
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
