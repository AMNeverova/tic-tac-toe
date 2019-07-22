/* eslint no-useless-escape: 0 */ // --> OFF
import {
    buttonStartActionType,
    enterNameActionType,
    submitNameActionType,
    cellClickActionType,
    clickModalActionType
} from "./actionTypes";

import store from 'store';
import config from '../configuration/config.json';

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
    "cells": [{
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
        }
    ],
    "winner": '',
    "clicks": 0,
    "pressed": false,
    "winnerName": '',
    "gameNumber": 0,
    "modalVisible": false,
    "gamefieldClassName": "gamefield"
}

let gameReducer = (state = initialState, action) => {
    if (action.type === buttonStartActionType) {
        let stateCopy = {...state}
        stateCopy.players = state.players.map((item) => {
            return {...item}
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

        stateCopy.cells = state.cells.map((item) => {
            return {
                ...item,
                content: ''
            }
        })
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
            stateCopy.gamefieldClassName = 'gamefield'
        }
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

        if (state.pressed && !state.winnerName) {
            stateCopy.clicks += 1;
            stateCopy.cells.map((item) => {
                if ((stateCopy.clicks % 2 == 0) && (action.cell == item.id)) {
                    item.content = 'zero'
                }
                if ((stateCopy.clicks % 2 !== 0) && (action.cell == item.id)) {
                    item.content = 'cross'
                }
            })

            stateCopy.players.map((item) => {
                if (item.active) {
                    item.active = false;
                    item.classNames.splice(2, 2)
                } else {
                    item.active = true;
                    item.classNames.push('active');
                }
            })

            if (stateCopy.cells[0].content && stateCopy.cells[0].content == stateCopy.cells[1].content && stateCopy.cells[0].content == stateCopy.cells[2].content) {
                stateCopy.gamefieldClassName += ' line1'
                if (stateCopy.cells[0].content == 'cross') {
                    stateCopy.winner = 'cross'
                } else {
                    stateCopy.winner = 'zero'
                }
            }
            if (stateCopy.cells[3].content && stateCopy.cells[3].content == stateCopy.cells[4].content && stateCopy.cells[3].content == stateCopy.cells[5].content) {
                stateCopy.gamefieldClassName += ' line2'
                if (stateCopy.cells[3].content == 'cross') {
                    stateCopy.winner = 'cross'
                } else {
                    stateCopy.winner = 'zero'
                }
            }
            if (stateCopy.cells[6].content && stateCopy.cells[6].content == stateCopy.cells[7].content && stateCopy.cells[6].content == stateCopy.cells[8].content) {
                stateCopy.gamefieldClassName += ' line3'
                if (stateCopy.cells[6].content == 'cross') {
                    stateCopy.winner = 'cross'
                } else {
                    stateCopy.winner = 'zero'
                }
            }
            if (stateCopy.cells[0].content && stateCopy.cells[0].content == stateCopy.cells[3].content && stateCopy.cells[0].content == stateCopy.cells[6].content) {
                stateCopy.gamefieldClassName += ' line4'
                if (stateCopy.cells[0].content == 'cross') {
                    stateCopy.winner = 'cross'
                } else {
                    stateCopy.winner = 'zero'
                }
            }
            if (stateCopy.cells[1].content && stateCopy.cells[1].content == stateCopy.cells[4].content && stateCopy.cells[1].content == stateCopy.cells[7].content) {
                stateCopy.gamefieldClassName += ' line5'
                if (stateCopy.cells[1].content == 'cross') {
                    stateCopy.winner = 'cross'
                } else {
                    stateCopy.winner = 'zero'
                }
            }
            if (stateCopy.cells[2].content && stateCopy.cells[2].content == stateCopy.cells[5].content && stateCopy.cells[2].content == stateCopy.cells[8].content) {
                stateCopy.gamefieldClassName += ' line6'
                if (stateCopy.cells[2].content == 'cross') {
                    stateCopy.winner = 'cross'
                } else {
                    stateCopy.winner = 'zero'
                }
            }
            if (stateCopy.cells[0].content && stateCopy.cells[0].content == stateCopy.cells[4].content && stateCopy.cells[0].content == stateCopy.cells[8].content) {
                stateCopy.gamefieldClassName += ' line7'
                if (stateCopy.cells[0].content == 'cross') {
                    stateCopy.winner = 'cross'
                } else {
                    stateCopy.winner = 'zero'
                }
            }
            if (stateCopy.cells[2].content && stateCopy.cells[2].content == stateCopy.cells[4].content && stateCopy.cells[2].content == stateCopy.cells[6].content) {
                stateCopy.gamefieldClassName += ' line8'
                if (stateCopy.cells[2].content == 'cross') {
                    stateCopy.winner = 'cross'
                } else {
                    stateCopy.winner = 'zero'
                }
            }
            if (stateCopy.clicks == 9 && !stateCopy.winnerName) {
                stateCopy.winnerName = config.drawGame;
                stateCopy.modalVisible = true;
                if (store.get('scoreTable')) {
                    let winnersArray = store.get('scoreTable')
                    if (winnersArray.length >= 12) {
                        winnersArray = winnersArray.slice(-11)
                    }
                    winnersArray.push('Draw game');
                    store.set('scoreTable', winnersArray)
                } else {
                    store.set('scoreTable', [config.drawGame])
                }
            }
            if (stateCopy.winner) {
                if (stateCopy.winner == 'cross') {
                    if (stateCopy.players[0].name) {
                        stateCopy.winnerName = stateCopy.players[0].name;
                        stateCopy.modalVisible = true;
                        if (store.get('scoreTable')) {
                            let winnersArray = store.get('scoreTable')
                            if (winnersArray.length >= 12) {
                                winnersArray = winnersArray.slice(-11)
                            }
                            winnersArray.push(stateCopy.players[0].name);
                            store.set('scoreTable', winnersArray)
                        } else {
                            store.set('scoreTable', [stateCopy.players[0].name])
                        }
                    } else {
                        stateCopy.winnerName = config.player1;
                        stateCopy.modalVisible = true;
                        if (store.get('scoreTable')) {
                            let winnersArray = store.get('scoreTable')
                            if (winnersArray.length >= 12) {
                                winnersArray = winnersArray.slice(-11)
                            }
                            winnersArray.push(config.player1);
                            store.set('scoreTable', winnersArray)
                        } else {
                            store.set('scoreTable', [config.player1])
                        }
                    }
                } else {
                    if (stateCopy.players[1].name) {
                        stateCopy.winnerName = stateCopy.players[1].name;
                        stateCopy.modalVisible = true;
                        if (store.get('scoreTable')) {
                            let winnersArray = store.get('scoreTable')
                            if (winnersArray.length >= 12) {
                                winnersArray = winnersArray.slice(-11)
                            }
                            winnersArray.push(stateCopy.players[1].name);
                            store.set('scoreTable', winnersArray)
                        } else {
                            store.set('scoreTable', [stateCopy.players[1].name])
                        }
                    } else {
                        stateCopy.winnerName = config.player2;
                        stateCopy.modalVisible = true;
                        if (store.get('scoreTable')) {
                            let winnersArray = store.get('scoreTable')
                            if (winnersArray.length >= 12) {
                                winnersArray = winnersArray.slice(-11)
                            }
                            winnersArray.push('Player2');
                            store.set('scoreTable', winnersArray)
                        } else {
                            store.set('scoreTable', [config.player2])
                        }
                    }
                }
            }
        }
        return stateCopy
    }

    if (action.type === clickModalActionType) {
        let stateCopy = {...state}
        stateCopy.modalVisible = false;
        return stateCopy
    }
    return state
}
export default gameReducer;