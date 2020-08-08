import chatReduсer from './chatReducer'
import { combineReducers } from 'redux'

const rootReduсer = combineReducers({
    chat: chatReduсer,
})

export default rootReduсer