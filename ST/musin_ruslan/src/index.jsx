import React from 'react';
import ReactDOM from 'react-dom';
import Router from "./containers/Router/Router"
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import initStore from "./Utils/store"



ReactDOM.render(
    <Provider store={ initStore() }>
        <BrowserRouter>
            <MuiThemeProvider>
                <Router />
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);
