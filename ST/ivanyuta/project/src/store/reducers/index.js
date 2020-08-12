import { combineReducers } from "redux";
import msg_reducer from "./msg_reducer.js";
import chat_reducer from "./chat_reducer.js";

export default combineReducers({ msg_reducer, chat_reducer });
