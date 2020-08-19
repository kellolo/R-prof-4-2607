import update from "react-addons-update";
import { ADD_CHAT } from "../Actions/chatActions"
import { ADD_MESSAGE } from "../Actions/addMessage"

const initialStore = {
    chats: {
        1: {title: "Batman", messageList: [1,2]},
        2: {title: "Lord Voldemort", messageList: [2]},
        3: {title: "Tony Stark", messageList: []},
        4: {title: "Boogyman", messageList: []},
        5: {title: "Shrek", messageList: []},
    },
};

export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
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
        case ADD_MESSAGE: {
            const messageId = store.chats[action.chatId].messageList.length + 1;
            return update(store, {
                chats: { [action.chatId]: { messageList: {$merge: {[messageId]: action.addMessageId}}}
            }})
            }
            default:
                return store;
            }
        }
