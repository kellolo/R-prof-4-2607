export let SEND_MSG = '@@message/SEND'; //for switch in reducer

export let sendMessage = (messageId, sender, text) => ({
//for transfering data from component
    type: SEND_MSG,
    messageId, 
    sender, 
    text
});