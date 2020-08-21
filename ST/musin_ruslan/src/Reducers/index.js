import { combineReducers } from "redux";
import chatReducer from "./chatReducer";
import messageReducer from "./messageReducer"

export default combineReducers({
    chatReducer,
    messageReducer,
});