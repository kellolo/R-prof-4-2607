export const SEND_MESSAGE = "@@message/SEND_MESSAGE";

export const sendMessage = (text, author) => ({
    type: SEND_MESSAGE,
    text,
    author,
});