export let ADD_CHAT = '@@chat/ADD'; //for switch in reducer

export let addChat = (...) => ({
//for transfering data from component
    type: ADD_CHAT,
    messageId, 
    sender, 
    text
});