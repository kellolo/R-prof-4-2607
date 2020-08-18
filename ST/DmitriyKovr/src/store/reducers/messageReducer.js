import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions.js';
import { ADD_CHAT } from '../actions/chatActions.js';


const initialStore = {
    chats: {
        1: {title: 'Чат 1', messageList: [1]},
        2: {title: 'Чат 2', messageList: [2]},
    },
    messages: {
        1: { text: 'Привет!', sender: 'bot' },
        2: { text: 'Как дела?', sender: 'bot' },
    },
};

export default function messageReducer(store = initialStore, action)
{
    switch (action.type) {
        case SEND_MESSAGE: {
            const { messageId, text, sender, chatId } = action;
            return update(store, {
                chats: { $merge: { [chatId]: { 
                    title: store.chats[chatId].title,
                    messageList: [...store.chats[chatId].messageList, messageId],
                }}},
                messages: { $merge: { [messageId]: {
                    text: text,
                    sender: sender,
                }}},
            });
        }
        case ADD_CHAT: {
            const chatId = Object.keys(store.chats).length + 1;
            return update(store, {
                chats: { $merge: { [chatId]: { 
                    title: action.title,
                    messageList: [],
                }}},
            });
        }
        default:
            return store;
    }
}