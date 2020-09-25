import { combineReducers } from 'redux'

import { gradsReducer } from './gradsReducer'
import { usersReducer } from './usersReducer'



export const rootReducer = combineReducers({
    grads: gradsReducer,
    users: usersReducer
})