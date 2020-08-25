import update from 'react-addons-update';
import { SUCCESS_SEND_MESSAGE } from '../actions/messageActions.js';
import { 
    START_CHATS_LOADING,
    SUCCESS_CHATS_LOADING,
    ERROR_CHATS_LOADING,
} from '../actions/chatActions.js';


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
    switch (action.type)
    {
        case SUCCESS_SEND_MESSAGE:
        {
            return update(store, {
                messages: { $merge: action.payload.entities.messages },
                botMessage: { $set: false },
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