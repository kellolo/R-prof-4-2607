import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions.js';
import { 
    START_CHATS_LOADING,
    SUCCESS_CHATS_LOADING,
    ERROR_CHATS_LOADING,
} from '../actions/chatActions.js';
import { ADD_CHAT } from '../actions/chatActions.js';


const initialStore = {
    /*
    chats: {
        1: {title: 'Чат 1', messageList: [1]},
        2: {title: 'Чат 2', messageList: [2]},
    },
    messages: {
        1: { text: 'Привет!', sender: 'bot' },
        2: { text: 'Как дела?', sender: 'bot' },
    },
    */
    messages: {},
};

export default function messageReducer(store = initialStore, action)
{
    switch (action.type) {
        
        case SEND_MESSAGE:
        {
            const { messageId, text, sender, chatId } = action;
            return update(store, {
                messages: { $merge: { [messageId]: {
                    text: text,
                    sender: sender,
                }}},
            });
        }
        case START_CHATS_LOADING: {
           return update(store, {
              isLoading: { $set: true },
           });
       }
       case SUCCESS_CHATS_LOADING: {
           return update(store, {
               messages: { $set: action.payload.entities.messages },
           });
       }
       case ERROR_CHATS_LOADING: {
           return update(store, {
               isLoading: { $set: false },
           });
       }
        
        default:
            return store;
    }
}