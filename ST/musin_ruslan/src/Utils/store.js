import { createStore, applyMiddleware } from "redux";
import initReducers from "./../Reducers"
import middlewares from "../middlewares";

function initStore() {


    return createStore(
        initReducers,
        compose(
            applyMiddleware(...middlewares),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
        ),
    );
}

export default initStore;