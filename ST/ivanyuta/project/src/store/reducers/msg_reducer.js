import update from "react-addons-update";

import { SEND_MSG } from "../actions/msg_action";
import { SET_MESSAGES } from "../actions/msg_action";

const initialStore = {
    chatMessages: {
        1: {
            messages: {
                1: {
                    sender: "Person in First Chat",
                    text: "Hello"
                },
                2: {
                    sender: "Me",
                    text: "Hi"
                }
            }
        },
        2: {
            messages: {
                1: {
                    sender: "Me",
                    text: "Hello!"
                },
                2: {
                    sender: "Me",
                    text: "How are you?"
                }
            }
        }
    },
    getChatMessages(chatId) {
        return this.chatMessages[chatId].messages;
    }
};

export default (store = initialStore, action) => {
    switch (action.type) {
        case SEND_MSG: {
            let { chatId, messageId, sender, text } = action;
            console.log( chatId, messageId, sender, text);
            return update(store, {
                chatMessages: {
                    [chatId]: {
                        messages: { $merge: { [messageId]: { sender, text } } }
                    }
                }
            });
        }
        case SET_MESSAGES: {
            let { messages } = action;
            return update(store, {
                messages: messages
            });
        }
        default:
            return store;
    }
};
