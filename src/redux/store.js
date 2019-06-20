import { combineReducers, createStore } from "redux";
import playersReducer from "./PlayersReducer";

let reducers = combineReducers(playersReducer)

let store = createStore(reducers)


let store1 = {
    "players": [
        {
        "title": "Player 1",
        "active": true,
        "name": "",
        "value": ""
},
    {
        "title": "Player 2",
        "active": true,
        "name": "",
        "value": ""
    }],
    "history": {
        "title": "History"
    },
    "buttonStart": "Start",
    "buttonEnterName": "Ok"
}

export default store