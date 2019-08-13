import {
    cellClickActionType,
    buttonStartActionType,
    enterNameActionType,
    submitNameActionType,
    changeToEnActionType,
    changeToRuActionType,
    clickTabActionType,
    clickModalActionType,
    changeFieldSizeActionType,
    changeWinQuantityActionType
} from "./actionTypes";

export let cellClickAC = (row, cellId) => {
    return {
        type: cellClickActionType,
        cell: [row, cellId]
    }
}

export let buttonStartAC = () => ({
    type: buttonStartActionType
})

export let enterNameAC = (newText, id) => {
    return {
        type: enterNameActionType,
        newText,
        id
    }
}

export const submitNameAC = (value, id) => {
    return {
        type: submitNameActionType,
        value: value,
        id: id
    }
}

export const changeToEnAC = () => ({
    type: changeToEnActionType
})

export const changeToRuAC = () => ({
    type: changeToRuActionType
})

export const clickTabAC = (id) => {
    return {
        type: clickTabActionType,
        id: id
    }
}

export const clickModalAC = () => ({
    type: clickModalActionType
})

export const changeFieldSizeAC = (field) => {
    return {
        type: changeFieldSizeActionType,
        field
    }
}

export const changeWinQuantityAC = (quantity) => {
    return {
        type: changeWinQuantityActionType,
        quantity
    }
}
