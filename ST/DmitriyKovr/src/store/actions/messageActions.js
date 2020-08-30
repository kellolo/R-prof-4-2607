import { RSAA, getJSON } from 'redux-api-middleware';
import { normalize } from 'normalizr';
import { chats } from '../../utils/schemas';


export const SEND_MESSAGE = '@@message/SEND_MESSAGE';
/*
export const sendMessage = (messageId, text, sender, chatId) => ({
    type: SEND_MESSAGE,
    messageId,
    text,
    sender,
    chatId,
});
*/

export const START_SEND_MESSAGE = '@@message/START_SEND_MESSAGE';
export const SUCCESS_SEND_MESSAGE = '@@message/SUCCESS_SEND_MESSAGE';
export const ERROR_SEND_MESSAGE = '@@message/ERROR_SEND_MESSAGE';

export const sendMessage = (text, sender, chatId) => ({
    [RSAA]: {
        endpoint: '/api/chats/send-msg',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, sender, chatId }),
        types: [
            START_SEND_MESSAGE,
            {
                type: SUCCESS_SEND_MESSAGE,
                meta: { sender, chatId },
                payload: (action, state, res) => getJSON(res).then(
                    json => normalize(json, [chats])
                ),
            },
            ERROR_SEND_MESSAGE,
        ],
    }
});
