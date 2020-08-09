import { handleActions } from 'redux-actions'
import { initChats, sendMessage } from '../actions/chats'
import { uuid } from 'uuidv4'

const initialState = {}

export default handleActions({

    [initChats] : (state, action) => {
        return {
            chats: {
                1: {
                    id: uuid(),
                    name: '1',
                    messages: [{name: "я", text: "first", id: uuid()}]
                },
                2: {
                    id: uuid(),
                    name: '2',
                    messages: [{name: "я", text: "second", id: uuid()}]
                },
                3: {
                    id: uuid(),
                    name: '3',
                    messages: [{name: "я", text: "third", id: uuid()}]
                },
                4: {
                    id: uuid(),
                    name: '4',
                    messages: [{name: "я", text: "one more", id: uuid()}]
                }
            }
        }
    },

    [sendMessage] : (state, action) => {
        console.log(state, action)
        const { id, name, content } = action.payload 

        return {
            ...state,
            ...state.chats,
            [id]: {
                ...state.chats[id],
                messages: [
                    ...state.chats[id].messages,
                    { name, text: content, id: uuid()}
                ]
            }
        }
    },
}, initialState)