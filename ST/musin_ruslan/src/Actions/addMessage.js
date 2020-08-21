export const ADD_MESSAGE = "@@chat/ADD_MESSAGE";

export const addMessage = (chatId, addMessageId) => ({
    type: ADD_MESSAGE,
    chatId,
    addMessageId,
})
