export const SEND_MSG ='@@message/SEND';
export const SET_MESSAGES ='@@message/SET_MESSAGES';

export const sendMessage = (chatId, messageId, sender, text) => ({
    type: SEND_MSG,
    chatId,
    messageId,
    sender,
    text
})

export const setMessages= (messages) => ({
    type: SET_MESSAGES,
    messages
})
