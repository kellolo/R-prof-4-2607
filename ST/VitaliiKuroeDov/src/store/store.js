// import { createStore } from 'redux'
// import rootReducer from './reducers'

// const store = createStore(rootReducer)

// export default store
import chatReducer from './reducers/chatReducer'
import { createStore, combineReducers } from 'redux'

const reducer = combineReducers({
    chats: chatReducer
})



export function initStore(preloadedState = undefined) {
    return createStore(reducer, preloadedState)
}