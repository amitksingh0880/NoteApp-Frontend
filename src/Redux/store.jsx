import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import userReducer from "./Users/user.reducer"
import { noteReducer } from "./Notes/note.reducer"
import { thunk } from "redux-thunk"

let rootReducer = combineReducers({
    userReducer: userReducer,
    noteReducer: noteReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))