import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./router.jsx";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import initStore from "./store/store.js";

const appContainer = document.querySelector("#app");
ReactDOM.render(
    <Provider store={initStore()}>
        <BrowserRouter>
            <div className="h-100">
                <Router />
            </div>
        </BrowserRouter>
    </Provider>,
    appContainer
);
