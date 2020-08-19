import update from "react-addons-update";
import { SEND_MESSAGE } from "../Actions/messageActions";

const initialStore = {
    messages: {
        1: { text: " Hello!", author: "'robot'"},
        2: { text: " How are you?", author: "'robot'"},
     },
};

export default function messageReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return update(store, {
                messages: { $merge: { [messageId]: {
                    text: action.text,
                    author: "'mr7282'"
                }}},
            });
        }
        default:
            return store;
    }
}