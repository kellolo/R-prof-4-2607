const GET_CHATS_SUCCESS = 'chats/GET_CHATS_SUCCESS'
const SEND_MSG = 'message/SEND'

const sendMessage = () => ({
    type: SEND_MESSAGE,
    payload: [``]
}) 

const getChatsSuccess = () => ({
    type: GET_CHATS_SUCCESS,
    payload: [`${uuid()}`]

})