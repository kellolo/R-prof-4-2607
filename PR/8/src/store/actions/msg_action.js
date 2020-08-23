import { getJSON, RSAA } from 'redux-api-middleware';

export let SEND_MSG = '@@message/SEND'; //for switch in reducer

export let START_LOAD_MSGS = '@@message/START_LOAD_MSGS';
export let SUCCESS_LOAD_MSGS = '@@message/SUCCESS_LOAD_MSGS';
export let ERR_LOAD_MSGS = '@@message/ERR_LOAD_MSGS';

export let START_SEND_MSG = '@@message/START_SEND_MSG';
export let SUCCESS_SEND_MSG = '@@message/SUCCESS_SEND_MSG';
export let ERR_SEND_MSG = '@@message/ERR_SEND_MSG';

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


export let sendMessage = (sender, text, chatId) => ({
    [RSAA]: {
        endpoint: '/api/chat/' + chatId,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sender, text }),
        types: [
            START_SEND_MSG,
            {
                type: SUCCESS_SEND_MSG,
                payload: (action, state, res) => getJSON(res).then(json => ({ msg: { sender, text, id: json.id } })) // { id }
            },
            ERR_SEND_MSG
        ]
    }
});
// export let sendMessage = (sender, text) => ({
// //for transfering data from component
//     type: SEND_MSG,
//     sender, 
//     text
// });