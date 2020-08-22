import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions.js';
import { SUCCESS_CHATS_LOADING } from '../actions/chatActions.js';
import { ADD_CHAT } from '../actions/chatActions.js';


const initialStore = {
    chats: {},
    isLoading: true,
};

export default function chatReducer(store = initialStore, action)
{
    switch (action.type) {
        case SEND_MESSAGE:
        {
            const { chatId, messageId } = action;
            return update(store, {
                chats: { $merge: { [chatId]: { 
                    title: store.chats[chatId].title,
                    messageList: [...store.chats[chatId].messageList, messageId],
                }}},
            });
        }
        case ADD_CHAT:
        {
            const chatId = Object.keys(store.chats).length + 1;
            return update(store, {
                chats: { $merge: { [chatId]: { 
                    title: action.title,
                    messageList: [],
                }}},
            });
        }
        case SUCCESS_CHATS_LOADING:
        {
            return update(store, {
                chats: { $set: action.payload.entities.chats },
                isLoading: { $set: false },
            });
        }
        default:
            return store;
    }
}