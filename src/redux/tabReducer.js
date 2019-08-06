import { clickTabActionType } from './actionTypes';
import config from '../configuration/config.json';

let initialState = [
    {
        id: 1,
        active: true,
        className: 'tab tab1',
        linkTo: config.tab1address,
        name: config.tab1name
    },
    {
        id: 2,
        active: false,
        className: 'tab tab2',
        linkTo: config.tab2address,
        name: config.tab2name
    }
]

let tabReducer = (state = initialState, action) => {
    if (action.type == clickTabActionType) {
        let stateCopy = state.map((item) => {
            return {...item}
        })

        stateCopy.map((item) => {
            item.active = false;
            document.querySelector(`.tab${item.id}`).classList.remove('active');
            if (item.id == action.id) {
                item.active = true;
                document.querySelector(`.tab${item.id}`).classList.add('active');
            }
        })
        return stateCopy
    }
    return state
}

export default tabReducer;
