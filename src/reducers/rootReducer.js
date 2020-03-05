import { combineReducers } from "redux"

import adminReducer from "./adminReducer"
import studentReducer from "./studentReducer"

export default combineReducers({
    admins: adminReducer, 
    students: studentReducer
})