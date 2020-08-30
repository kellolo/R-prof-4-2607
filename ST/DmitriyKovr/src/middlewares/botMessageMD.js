import { SUCCESS_SEND_MESSAGE, sendMessage } from '../store/actions/messageActions.js';
import { SUCCESS_ADD_CHAT } from '../store/actions/chatActions.js';

export default store => next => action => {
    switch (action.type) {
        case SUCCESS_SEND_MESSAGE: {
            const { sender, chatId } = action.meta;
            if (sender !== 'bot') {
                
                setTimeout(() => {
                    return store.dispatch(sendMessage(
                        'Не приставай ко мне, я робот!',
                        'bot',
                        chatId
                    ))
                }, 1000);
            }
            break;
        }
        case SUCCESS_ADD_CHAT: {
            const { title, id } = action.payload;
            return store.dispatch(sendMessage(
                `Сам ты ${title}!`,
                'bot',
                id
            ));
        }
    }
    
    return next(action);
}