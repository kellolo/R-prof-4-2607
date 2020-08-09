import update from 'react-addons-update';
import { SEND_MSG } from '../actions/msg_action';

const initialStore = {
    messages: {
        1: {sender: 'Bot', text: 'Hello'},
        2: {sender: 'Bot', text: 'How a u?'}
    }
}

export default (store = initialStore, action) => {
    switch(action.type) {
        case SEND_MSG: {
            let { messageId, sender, text } = action;
            return update(store, {
                messages: { $merge: { [messageId]: {sender, text} } }
            })
        }

        default:
            return store;
    }
    // if (action == 'test') {
    //     //update store
    //     return update(store, ...);
    // } else {
    //     return store
    // }
}