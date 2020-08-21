export const ADD_CHAT = "@@chat/ADD_CHAT";

export const addChat = (title, chatId) => ({
    type: ADD_CHAT,
    title,
    chatId,
});