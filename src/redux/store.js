import { combineReducers, createStore } from 'redux';
import gameReducer from './gameReducer';
import tabReducer from './tabReducer';
import langReducer from './langReducer';

let reducers = combineReducers({
    game: gameReducer,
    tabs: tabReducer,
    lang: langReducer
})

let store = createStore(reducers)

export default store;
