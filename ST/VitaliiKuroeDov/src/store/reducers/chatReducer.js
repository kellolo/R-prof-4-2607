import { handleActions } from 'redux-actions'
import { initChats, sendMessage } from '../actions/chats'
import { uuid } from 'uuidv4'

const initialState = {}

export default handleActions({

    [initChats] : (state, action) => {
        return {
            chats: {
                1: {
                    id: 1,
                    name: '1',
                    messages: [{name: "я", text: "first", id: uuid()}]
                },
                2: {
                    id: 2,
                    name: '2',
                    messages: [{name: "я", text: "second", id: uuid()}]
                },
                3: {
                    id: 3,
                    name: '3',
                    messages: [{name: "я", text: "third", id: uuid()}]
                },
                4: {
                    id: 4,
                    name: '4',
                    messages: [{name: "я", text: "one more", id: uuid()}]
                }
            }
        }
    },

    [sendMessage] : (state, action) => {

        const { id, name, content } = action.payload
        console.log(state, action)
        // // console.log(state.chats)
        // const newState = {
        //     ...state.chats,
        //     [id]: {
        //         ...state.chats[id],
        //         messages:[
        //             ...state.chats[id].messages,
        //             {name, text: content}
        //         ]
        //     }
        // }
        // // console.log(newState, 'new')
        // return newState

        return {
            ...state,
            chats: {
                ...state.chats,
                [id]: {
                    ...state.chats[id],
                    messages: [
                        ...state.chats[id].messages,
                        { id: uuid(), name, text: content }
                    ]
                }
            }
           
        }
    },
}, initialState)