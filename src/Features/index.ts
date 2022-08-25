import { combineReducers } from 'redux'
import User from './User'
import Articles from './Articles'


const PersistRootReducer = combineReducers({
    User,
    Articles
})
   
export default PersistRootReducer;