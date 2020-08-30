import update from 'react-addons-update';
import { SUCCESS_SEND_MESSAGE } from '../actions/messageActions.js';
import { SUCCESS_CHATS_LOADING, SUCCESS_ADD_CHAT } from '../actions/chatActions.js';


const initialStore = {
    chats: {},
    isLoading: true,
};

export default function chatReducer(store = initialStore, action)
{
    switch (action.type)
    {
        case SUCCESS_SEND_MESSAGE:
        {
            return update(store, {
                chats: { $merge: action.payload.entities.chats },
            });
        }
        case SUCCESS_ADD_CHAT:
        {
            const { id, title } = action.payload;
            return update(store, { 
                chats: { $merge: { [id]: { 
                    title,
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