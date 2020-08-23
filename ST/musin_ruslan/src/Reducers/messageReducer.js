import update from "react-addons-update";
import { SEND_MESSAGE } from "../Actions/messageActions";
import { ADD_CHAT } from "../Actions/chatActions"

const initialStore = {
    chats: {
        1: {title: "Batman", messageList: [1,2]},
        2: {title: "Lord Voldemort", messageList: [2]},
        3: {title: "Tony Stark", messageList: []},
        4: {title: "Boogyman", messageList: []},
        5: {title: "Shrek", messageList: []},
    },
    messages: {
        1: { text: " Hello!", author: "'robot'"},
        2: { text: " How are you?", author: "'robot'"},
     },
};

export default function messageReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            const addMessageId = Object.keys(store.messages).length + 1
            return update(store, {
                messages: { $merge: { [addMessageId]: {
                    text: action.text,
                    author: action.author,
                }}},
                chats: { [action.chatId]: { messageList: {$merge: {[Object.keys(store.chats[action.chatId].messageList).length]: addMessageId}}}
            },
            });
        }
        case ADD_CHAT: {
            const chatId = Object.keys(store.chats).length + 1;
            return update(store, {
                chats: {$merge: {
                    [chatId]: {
                        title: action.title, messageList: []
                    }
                }},
            });
        }
        default:
            return store;
    }
}