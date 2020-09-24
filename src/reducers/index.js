import { LoginReducer } from './auth'
import { UsersReducer } from './users'
import { combineReducers } from 'redux'

export default combineReducers({
    LoginReducer: LoginReducer,
    UsersReducer: UsersReducer
})