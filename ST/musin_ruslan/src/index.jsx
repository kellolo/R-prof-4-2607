import React from 'react';
import ReactDOM from 'react-dom';
import Router from "./containers/Router/Router"
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { PersistGate } from "redux-persist/integration/react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import initStore, { history } from "./Utils/store"

const { store, persistor }= initStore();



ReactDOM.render(
    <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor }>
            <ConnectedRouter history={history}>
                <MuiThemeProvider>
                    <Router />
                </MuiThemeProvider>
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);
