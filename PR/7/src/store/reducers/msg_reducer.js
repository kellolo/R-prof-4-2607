import update from 'react-addons-update';
import { SEND_MSG, SUCCESS_LOAD_MSGS  } from '../actions/msg_action';

const initialStore = {
    messages: {
        // 1: {sender: 'Bot', text: 'Hello'},
        // 2: {sender: 'Bot', text: 'How a u?'}
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

        case SUCCESS_LOAD_MSGS: {
            console.log(action)
            return update(store, {
                messages: { $set: action.payload }
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