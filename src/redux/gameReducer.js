export const buttonStartActionType = 'BUTTON-START-CLICK';
export const enterNameActionType = 'ENTERING-NAME';
export const submitNameActionType = 'SUBMIT-NAME-BUTTON-CLICK';
export const cellClickActionType = 'CELL-CLICK';

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

const initialState = {
    "players": [{
            "id": 1,
            "active": false,
            "name": "",
            "value": "",
            "className": "player player1"
        },
        {
            "id": 2,
            "active": false,
            "name": "",
            "value": "",
            "className": "player player2"
        }
    ],
    "cells":  [{
        "id": 1,
        "className": "cell cell1",
        "content": '',
    },
    {
        "id": 2,
        "className": "cell cell2",
        "content": '',
    },
    {
        "id": 3,
        "className": "cell cell3",
        "content": '',
    },
    {
        "id": 4,
        "className": "cell cell4",
        "content": '',
    },
    {
        "id": 5,
        "className": "cell cell5",
        "content": '',
    },
    {
        "id": 6,
        "className": "cell cell6",
        "content": '',
    },
    {
        "id": 7,
        "className": "cell cell7",
        "content": '',
    },
    {
        "id": 8,
        "className": "cell cell8",
        "content": '',
    },
    {
        "id": 9,
        "className": "cell cell9",
        "content": '',
    }],
    "scoreTable": [],
    "clicks": 0,
    "pressed": false
}

let gameReducer = (state = initialState, action) => {
    if (action.type === buttonStartActionType) {
        let stateCopy = {...state}
        stateCopy.players = state.players.map((item) =>{
            return {...item}
        })
        stateCopy.players.map((item) => {
            if (item.id == 1) {
                item.active = true;
                item.className += ' active'
            }
        })
        stateCopy.pressed = true
        return stateCopy
    }

    if (action.type === enterNameActionType) {
        let stateCopy = {...state}
        stateCopy.players = state.players.map((item) => {
            return {...item}
        })

        stateCopy.players.map((item) => {
            if (item.id == action.id) {
                item.value = action.newText
            }
        })
        return stateCopy
    }

    if (action.type === submitNameActionType) {
        let stateCopy = {...state}
        stateCopy.players = state.players.map((item) => {
            return {...item}
        })

        stateCopy.players.map((item) => {
            if (item.id == action.id) {
                item.name = action.value
                item.value = ''
            }
        })

        return stateCopy
    }

    if (action.type === cellClickActionType) {
        let stateCopy = {...state};
        stateCopy.players = state.players.map((item) => {
            return {...item}
        })
        stateCopy.cells = state.cells.map((item) => {
            return {...item}
        })

       if (state.pressed) {
            stateCopy.clicks += 1;
            stateCopy.cells.map((item) => {
                if ((stateCopy.clicks % 2 == 0) && (action.cell == item.id) ) {
                    item.content = 'zero'
                } 
                if ((stateCopy.clicks % 2 !== 0) && (action.cell == item.id) ) {
                    item.content = 'cross'
                } 
            })

            stateCopy.players.map((item) => {
                if (item.active) {
                    item.active = false;
                    item.className = item.className.slice(0, 14)
                } else {
                    item.active = true;
                    item.className+= " active"
                }
        })

        return stateCopy
    }
    }
    return state
}

export default gameReducer;