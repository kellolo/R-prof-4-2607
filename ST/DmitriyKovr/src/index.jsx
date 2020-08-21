import React from 'react';
import ReactDom from 'react-dom';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout/Layout.jsx';
import { ThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import { ConnectedRouter } from 'connected-react-router';
import Router from './router.jsx';

import { Provider } from 'react-redux';
import { initStore, history } from './store/store.js';

import { PersistGate } from 'redux-persist/integration/react';

const appContainer = document.querySelector('#app');
const { store, persistor } = initStore();
//const theme = {};

let theme = createMuiTheme();
//theme = responsiveFontSizes(theme);


ReactDom.render(
    <Provider store={ store }>
        <PersistGate
            loading={ null }
            persistor={ persistor }
        >
            <ConnectedRouter history={ history }>
                <ThemeProvider theme={ theme }>
                    <div className='h-100 w-100'>
                        <Router />
                    </div>
                </ThemeProvider>
            </ConnectedRouter>
        </PersistGate>
    </Provider> 
    ,appContainer
);
