import { combineReducers } from 'redux';
import msg_reducer from './msg_reducer.js';

import { connectRouter } from 'connected-react-router';

export default history => combineReducers({ router: connectRouter(history), msg_reducer })