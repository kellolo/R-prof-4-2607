export const ADD_CHAT = "@@message/ADD_CHAT";

export const addChat = (title, chatId) => ({
    type: ADD_CHAT,
    title,
    chatId,
});