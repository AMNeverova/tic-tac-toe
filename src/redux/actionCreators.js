import { cellClickActionType, buttonStartActionType, enterNameActionType, submitNameActionType, changeToEnActionType, changeToRuActionType, clickTabActionType } from "./actionTypes";

export let cellClickAC = (cellId) => {
    return {
        type: cellClickActionType,
        cell: cellId
    }
}

export let buttonStartAC = () => {
    return {
        type: buttonStartActionType
    }
}

export let enterNameAC = (newText, id) => {
    return {
        type: enterNameActionType,
        newText, id
    }
}

export const submitNameAC = (value, id) => {
    return {
        type: submitNameActionType,
        value: value,
        id: id
    }
} 

export const changeToEnAC = () => ({type: changeToEnActionType});
export const changeToRuAC = () => ({type: changeToRuActionType});

export const clickTabAC = (id) => {
    return {
        type: clickTabActionType,
        id: id
    }
}

