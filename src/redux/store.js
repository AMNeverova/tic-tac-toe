import { combineReducers, createStore } from "redux";
import gameReducer from "./gameReducer";
import tabReducer from './tabReducer';

let reducers = combineReducers({
    game: gameReducer,
    tabs: tabReducer
})

let store = createStore(reducers)

export default store