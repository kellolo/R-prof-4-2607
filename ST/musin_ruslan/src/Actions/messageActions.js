export const SEND_MESSAGE = "@@message/SEND_MESSAGE";

export const sendMessage = (chatId, text, author) => ({
    type: SEND_MESSAGE,
    chatId,
    text,
    author,
});