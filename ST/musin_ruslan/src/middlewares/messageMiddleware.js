import { SEND_MESSAGE, sendMessage } from "../Actions/messageActions";

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.author === "'mr7282'") {
                setTimeout(() => store.dispatch(sendMessage( action.chatId, "Я русский робот. Прошу это учесть при написании мне!", "'robot'")), 1000);
            }
            if (action.author === "'robot'") {
                
            }
    }
    return next(action)
}