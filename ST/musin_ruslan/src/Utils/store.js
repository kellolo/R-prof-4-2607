import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import initReducers from "./../Reducers";
import middlewares from "../middlewares";

const persistConfig = {
    key: "geekmessanger",
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ["messageReducer"],
};

export const history = createBrowserHistory()

function initStore() {

    const store =  createStore(
        persistReducer(persistConfig, initReducers(history)),
        compose(
            applyMiddleware(routerMiddleware(history), ...middlewares),
                 window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
        ),
    );

    const persistor = persistStore(store);
    return { store, persistor };
}

export default initStore;