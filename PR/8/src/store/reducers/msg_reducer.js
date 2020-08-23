import update from 'react-addons-update';
import { SEND_MSG, SUCCESS_LOAD_MSGS, SUCCESS_SEND_MSG  } from '../actions/msg_action';

const initialStore = {
    messages: []
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
            console.log(action.payload)
            return update(store, {
                messages: { $push: action.payload }
            })
        }

        case SUCCESS_SEND_MSG: {
            let msg = action.payload.msg;
            return update(store, {
                messages: { $push: msg }
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