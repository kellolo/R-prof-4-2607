import { getJSON, RSAA } from 'redux-api-middleware';

export let SEND_MSG = '@@message/SEND'; //for switch in reducer

export let START_LOAD_MSGS = '@@message/START_LOAD_MSGS';
export let SUCCESS_LOAD_MSGS = '@@message/SUCCESS_LOAD_MSGS';
export let ERR_LOAD_MSGS = '@@message/ERR_LOAD_MSGS';

export const loadMessages = (chatId = 1) => ({
    [RSAA]: {
        endpoint: '/api/chat/' + chatId,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        types: [
            START_LOAD_MSGS,
            {
                type: SUCCESS_LOAD_MSGS,
                payload: (action, state, res) => getJSON(res).then(json => json)
            },
            ERR_LOAD_MSGS
        ]
    }
})

export let sendMessage = (messageId, sender, text) => ({
//for transfering data from component
    type: SEND_MSG,
    messageId, 
    sender, 
    text
});