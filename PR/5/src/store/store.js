import { createStore } from 'redux';
import initReducers from './reducers';

export default function initStore() {
    // let initialStore = { a: 10 };

    // return createStore(initReducers, initialStore);
    return createStore(initReducers, {});
}