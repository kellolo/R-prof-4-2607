import { createStore }  from 'redux';
import initReducers from './reducers';

export default function initStore() {
    let initialStore= {};

    return createStore(initReducers, initialStore);
}
