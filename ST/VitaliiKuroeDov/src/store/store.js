
import chatReducer from './reducers/chatReducer'
import { createStore, combineReducers } from 'redux'

const reducer = combineReducers({
    chats: chatReducer
})


export function initStore(preloadedState = undefined) {
    return createStore(reducer, preloadedState)
}