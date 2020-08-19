import { createStore, compose, applyMiddleware } from 'redux';
import initReducers from './reducers';
import middlewares from '../middlewares';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

// export default function initStore() {
//     // let initialStore = { a: 10 };

//     // return createStore(initReducers, initialStore);
    // return createStore(initReducers, {}, compose(
    //     applyMiddleware(...middlewares)
    // ));
// }

export const history = createBrowserHistory();

export function initStore() {
    return createStore(initReducers(history), {}, compose(
        applyMiddleware(routerMiddleware(history),...middlewares),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {}
    ));
}