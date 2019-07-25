/* eslint no-useless-escape: 0 */ // --> OFF
import {
    buttonStartActionType,
    enterNameActionType,
    submitNameActionType,
    cellClickActionType,
    clickModalActionType,
    changeFieldSizeActionType
} from "./actionTypes";

import store from 'store';
import config from '../configuration/config.json';
import findWinner from "../configuration/findWinner";

const initialState = {
    "players": [{
            "id": 1,
            "active": false,
            "name": "",
            "value": "",
            "classNames": ["player", "player1"]
        },
        {
            "id": 2,
            "active": false,
            "name": "",
            "value": "",
            "classNames": ["player", "player2"]
        }
    ],
    "gamefield3": [
        [null, null, null],
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
        [null, null, null]
    ],
    "gamefield5": [
        [null, null, null, null, null],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        [null, null, null, null, null]
    ],
    "gamefield10": [
        [null, null, null, null, null, null, null, null, null, null],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        [null, null, null, null, null, null, null, null, null, null]
    ],
    "winner": '',
    "clicks": 0,
    "pressed": false,
    "winnerName": '',
    "gameNumber": 0,
    "modalVisible": false,
    "gamefieldClassName": "gamefield3",
    "field": "gamefield3"
}

let gameReducer = (state = initialState, action) => {
    if (action.type === buttonStartActionType) {
        let stateCopy = {
            ...state
        }
        stateCopy.players = state.players.map((item) => {
            return {
                ...item
            }
        })
        stateCopy.players.map((item) => {
            if (item.id == 1) {
                item.active = true;
                item.classNames.splice(2, 2);
                item.classNames.push('active');
            } else {
                item.active = false;
                item.classNames.splice(2, 2)
            }
        })

        stateCopy[state.field] = state[state.field].map((item) => [...item]);
        for (let i = 1; i <= stateCopy[state.field].length - 2; i++) {
            for (let j = 0; j <= stateCopy[state.field].length - 1; j++) {
                if (stateCopy[state.field][i][j]) {
                    stateCopy[state.field][i][j] = ''
                }
            }
        }
        if (!stateCopy.winnerName && stateCopy.clicks != 0) {
            if (store.get('scoreTable')) {
                let winnersArray = store.get('scoreTable')
                if (winnersArray.length >= 12) {
                    winnersArray = winnersArray.slice(-11)
                }
                winnersArray.push([stateCopy.gameNumber, '-']);
                store.set('scoreTable', winnersArray)
            } else {
                store.set('scoreTable', [stateCopy.gameNumber, '-'])
            }

        }
        stateCopy.winner = ''
        stateCopy.pressed = true;
        stateCopy.gameNumber += 1;
        if (stateCopy.winnerName) {
            stateCopy.winnerName = '';
        } 


        if (stateCopy.clicks != 0) {
            stateCopy.clicks = 0;
        }

        let reg = new RegExp('line\\d');
        if (stateCopy.gamefieldClassName.match(reg)) {
            stateCopy.gamefieldClassName = `gamefield${stateCopy.field} `
        }
        return stateCopy
    }

    if (action.type === enterNameActionType) {
        let stateCopy = {
            ...state
        }
        stateCopy.players = state.players.map((item) => {
            return {
                ...item
            }
        })

        stateCopy.players.map((item) => {
            if (item.id == action.id) {
                item.value = action.newText
            }
        })
        return stateCopy
    }

    if (action.type === submitNameActionType) {
        let stateCopy = {
            ...state
        }
        stateCopy.players = state.players.map((item) => {
            return {
                ...item
            }
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
        let stateCopy = {
            ...state
        };
        stateCopy.players = state.players.map((item) => {
            return {
                ...item
            }
        })
        stateCopy[state.field] = state[state.field].map((item) => [...item])

        if (state.pressed && !state.winnerName) {
            if (!stateCopy[state.field][action.cell[0]][action.cell[1]]) {
                stateCopy.clicks += 1;

                if (stateCopy.players[0].active) {
                    stateCopy[state.field][action.cell[0]][action.cell[1]] = config.cross
                } else {
                    stateCopy[state.field][action.cell[0]][action.cell[1]] = config.zero
                }
                stateCopy.players.map((item) => {
                    if (item.active) {
                        item.active = false;
                        item.classNames.splice(2, 2)
                    } else {
                        item.active = true;
                        item.classNames.push('active');
                    }
                })
            }
            console.log(action.cell)
            stateCopy.winner = findWinner(stateCopy[state.field], action.cell)

            if (stateCopy.winner && stateCopy.winner.winnerSymbol == config.cross) {
                if (stateCopy.players[0].name) {
                    stateCopy.winnerName = stateCopy.players[0].name;
                } else {
                    stateCopy.winnerName = config.player1
                }
            }

            if (stateCopy.winner && stateCopy.winner.winnerSymbol == config.zero) {
                if (stateCopy.players[1].name) {
                    stateCopy.winnerName = stateCopy.players[1].name;
                } else {
                    stateCopy.winnerName = config.player2
                }

            }

            console.log(stateCopy.winnerName)

            if (stateCopy.winner) {
                stateCopy.pressed = false;
                stateCopy.modalVisible = true;

                if (stateCopy.winnerName) {

                    if (store.get('scoreTable')) {
                        let winnersArray = store.get('scoreTable')
                        if (winnersArray.length >= 12) {
                            winnersArray = winnersArray.slice(-11)
                        }
                        winnersArray.push([stateCopy.gameNumber, stateCopy.winnerName]);
                        store.set('scoreTable', winnersArray)
                    } else {
                        store.set('scoreTable', [stateCopy.gameNumber, stateCopy.winnerName])
                    }
                }
            }
        }
        return stateCopy
    }

    if (action.type === clickModalActionType) {
        let stateCopy = {
            ...state
        }
        stateCopy.modalVisible = false;
        return stateCopy
    }

    if (action.type === changeFieldSizeActionType) {
        let stateCopy = {
            ...state
        };
        stateCopy.gamefieldClassName = action.field;
        stateCopy.field = action.field;
        return stateCopy
    }
    return state
}
export default gameReducer;