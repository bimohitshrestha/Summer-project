import { combineReducers } from "redux"
import addItem from "./addItem"

const rootReducers = combineReducers({
    cartStore:addItem
})

export default rootReducers