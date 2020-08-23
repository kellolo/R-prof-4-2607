import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import messageReducer from "./messageReducer"

export default (history) => combineReducers({
    router: connectRouter(history),
    messageReducer,
});