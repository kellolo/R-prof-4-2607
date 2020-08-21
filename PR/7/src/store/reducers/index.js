import { combineReducers } from 'redux';
import msg_reducer from './msg_reducer.js';
import { connectRouter } from 'connected-react-router';
// import some_reducer from './some_reducer.js';

// export default combineReducers({ msg_reducer, some_reducer });
export default history => combineReducers({ router: connectRouter(history), msg_reducer });