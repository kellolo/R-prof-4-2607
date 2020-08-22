import { SEND_MESSAGE, sendMessage } from '../store/actions/messageActions.js';
import { ADD_CHAT } from '../store/actions/chatActions.js';

export default store => next => action => {
    switch (action.type) {
        case SEND_MESSAGE: {
            if (action.sender === 'me') {
                setTimeout(() => {
                    const id = Object.keys(store.getState().messageReducer.messages).length + 1;
                    //console.log('+1c');
                    //console.log(store.getState().messageReducer.messages);
                    return store.dispatch(sendMessage(
                    id,
                    'Не приставай ко мне, я робот!',
                    'bot',
                    action.chatId
                ))
                }, 1000);
            }
            break;
        }
        case ADD_CHAT: {
            //console.log(store.getState().messageReducer.chats);
            break;
        }
    }
    
    return next(action);
}