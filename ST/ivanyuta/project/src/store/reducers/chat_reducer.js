import update from "react-addons-update";

const initialStore = {
    chats: {
        1: {
            id: 1,
            title: "First Chat",
            person: "First Person"
        },
        2: {
            id: 2,
            title: "Second Chat",
            person: "Second Person"
        }
    },
};


export default (store = initialStore, action) => {
    switch (action.type) {
        // case SEND_MSG: {
        //     let { messageId, sender, text } = action;
        //     return update(store, {
        //         messages: { $merge: { [messageId]: { sender, text } } }
        //     });
        // }
        default:
            return store;
    }
};
