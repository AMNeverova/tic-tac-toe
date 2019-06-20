export const buttonStartActionType = 'BUTTON-START-CLICK';

const initialState = {
    players: [{
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
        }
    ]
}

export let buttonStartAC = () => {
    return {
        type: buttonStartActionType
    }
}

let playersReducer = (state = initialState, action) => {
    if (action.type === buttonStartActionType) {
        state.active = true
    }
    return state
}

export default playersReducer;