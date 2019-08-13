import {changeToEnActionType, changeToRuActionType} from "./actionTypes";

let initialState = {
    lang: "ru"
}

let langReducer = (state = initialState, action) => {
    if (action.type === changeToEnActionType && state.lang === "ru") {
        let stateCopy = {
            ...state
        }
        stateCopy.lang = "en";
        return stateCopy;
    }

    if (action.type === changeToRuActionType && state.lang === "en") {
        let stateCopy = {
            ...state
        }
        stateCopy.lang = "ru";
        return stateCopy;
    }
    return state;
}
export default langReducer;
