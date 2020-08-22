import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import messageReducer from './messageReducer.js';
import chatReducer from './chatReducer.js';


export default history => combineReducers({
    router: connectRouter(history),
    messageReducer,
    chatReducer,
});