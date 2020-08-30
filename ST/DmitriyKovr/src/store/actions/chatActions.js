import { RSAA, getJSON } from 'redux-api-middleware';
import { normalize } from 'normalizr';
import { chats } from '../../utils/schemas';


export const ADD_CHAT = '@@chat/ADD_CHAT';
/*
export const addChat = (title) => ({
    type: ADD_CHAT,
    title,
});
*/

export const START_CHATS_LOADING = '@@chat/START_CHATS_LOADING';
export const SUCCESS_CHATS_LOADING = '@@chat/SUCCESS_CHATS_LOADING';
export const ERROR_CHATS_LOADING = '@@chat/ERROR_CHATS_LOADING';

export const loadChats = () => ({
    [RSAA]: {
        endpoint: '/api/chats',
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        types: [
            START_CHATS_LOADING,
            {
                type: SUCCESS_CHATS_LOADING,
                payload: (action, state, res) => getJSON(res).then(
                    json => normalize(json, [chats])
                ),
            },
            ERROR_CHATS_LOADING,
        ],
    }
});


export const START_ADD_CHAT = '@@chat/START_ADD_CHAT';
export const SUCCESS_ADD_CHAT = '@@chat/SUCCESS_ADD_CHAT';
export const ERROR_ADD_CHAT = '@@chat/ERROR_ADD_CHAT';

export const addChat = (title) => ({
    [RSAA]: {
        endpoint: '/api/chats/add-chat',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title }),
        types: [
            START_ADD_CHAT,
            {
                type: SUCCESS_ADD_CHAT,
                payload: (action, state, res) => getJSON(res).then(
                    json => json
                ),
            },
            ERROR_ADD_CHAT,
        ],
    }
});
