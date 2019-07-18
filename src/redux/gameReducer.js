/* eslint no-useless-escape: 0 */  // --> OFF
import {
    buttonStartActionType,
    enterNameActionType,
    submitNameActionType,
    cellClickActionType
} from "./actionTypes";

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
    "winnerMessage": '',
    "gameNumber": 0
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
                item.className = item.className.slice(0, 14);
                item.className += ' active';
            } else {
                item.active = false;
                item.className = item.className.slice(0, 14)
            }
        })

        stateCopy.cells = state.cells.map((item) => {
            return {...item, content: ''}
        })
        stateCopy.winner = ''
        stateCopy.pressed = true;
        stateCopy.gameNumber += 1;
        if (stateCopy.winnerMessage) {
            stateCopy.winnerMessage = '';
        }

        if (stateCopy.clicks != 0) {
            stateCopy.clicks = 0;
        }
        document.querySelector('.gamefield').classList = 'gamefield'
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
        let stateCopy = {...state};
        stateCopy.players = state.players.map((item) => {
            return {...item}
        })
        stateCopy.cells = state.cells.map((item) => {
            return {...item}
        })

        if (state.pressed && !state.winnerMessage) {
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
                    item.className = item.className.slice(0, 14)
                } else {
                    item.active = true;
                    item.className += " active"
                }
            })

            if (stateCopy.cells[0].content && stateCopy.cells[0].content == stateCopy.cells[1].content && stateCopy.cells[0].content == stateCopy.cells[2].content) {

                document.querySelector('.gamefield').classList.add('line1');

                if (stateCopy.cells[0].content == 'cross') {
                    stateCopy.winner = 'cross'
                } else {
                    stateCopy.winner = 'zero'
                }
            }

            if (stateCopy.cells[3].content && stateCopy.cells[3].content == stateCopy.cells[4].content && stateCopy.cells[3].content == stateCopy.cells[5].content) {

                document.querySelector('.gamefield').classList.add('line2');

                if (stateCopy.cells[3].content == 'cross') {
                    stateCopy.winner = 'cross'
                } else {
                    stateCopy.winner = 'zero'
                }
            }
            if (stateCopy.cells[6].content && stateCopy.cells[6].content == stateCopy.cells[7].content && stateCopy.cells[6].content == stateCopy.cells[8].content) {

                document.querySelector('.gamefield').classList.add('line3');

                if (stateCopy.cells[6].content == 'cross') {
                    stateCopy.winner = 'cross'
                } else {
                    stateCopy.winner = 'zero'
                }
            }
            if (stateCopy.cells[0].content && stateCopy.cells[0].content == stateCopy.cells[3].content && stateCopy.cells[0].content == stateCopy.cells[6].content) {
                document.querySelector('.gamefield').classList.add('line4');
                if (stateCopy.cells[0].content == 'cross') {
                    stateCopy.winner = 'cross'
                } else {
                    stateCopy.winner = 'zero'
                }
            }
            if (stateCopy.cells[1].content && stateCopy.cells[1].content == stateCopy.cells[4].content && stateCopy.cells[1].content == stateCopy.cells[7].content) {
                document.querySelector('.gamefield').classList.add('line5');

                if (stateCopy.cells[1].content == 'cross') {
                    stateCopy.winner = 'cross'
                } else {
                    stateCopy.winner = 'zero'
                }
            }
            if (stateCopy.cells[2].content && stateCopy.cells[2].content == stateCopy.cells[5].content && stateCopy.cells[2].content == stateCopy.cells[8].content) {
                document.querySelector('.gamefield').classList.add('line6');

                if (stateCopy.cells[2].content == 'cross') {
                    stateCopy.winner = 'cross'
                } else {
                    stateCopy.winner = 'zero'
                }

            }
            if (stateCopy.cells[0].content && stateCopy.cells[0].content == stateCopy.cells[4].content && stateCopy.cells[0].content == stateCopy.cells[8].content) {
                document.querySelector('.gamefield').classList.add('line7');
                if (stateCopy.cells[0].content == 'cross') {
                    stateCopy.winner = 'cross'
                } else {
                    stateCopy.winner = 'zero'
                }

            }
            if (stateCopy.cells[2].content && stateCopy.cells[2].content == stateCopy.cells[4].content && stateCopy.cells[2].content == stateCopy.cells[6].content) {
                document.querySelector('.gamefield').classList.add('line8');
                if (stateCopy.cells[2].content == 'cross') {
                    stateCopy.winner = 'cross'
                } else {
                    stateCopy.winner = 'zero'
                }
            }
            if (stateCopy.clicks == 9 && !stateCopy.winnerMessage) {
                stateCopy.winnerMessage = 'It is a draw!';
                if (localStorage.getItem('scoreTable')) {
                    let winnersArray = JSON.parse(localStorage.getItem('scoreTable'));
                    if (winnersArray.length >= 12) {
                        winnersArray = winnersArray.slice(-11)
                    }
                    winnersArray.push('Draw game');
                    localStorage.setItem('scoreTable', JSON.stringify(winnersArray));
                } else {
                localStorage.setItem('scoreTable', JSON.stringify(['Draw game']));}
            }

            if (stateCopy.winner) {
                if (stateCopy.winner == 'cross') {
                    if (stateCopy.players[0].name) {
                        stateCopy.winnerMessage = `${stateCopy.players[0].name} wins!`;
                        if (localStorage.getItem('scoreTable')) {
                            let winnersArray = JSON.parse(localStorage.getItem('scoreTable'));
                            if (winnersArray.length >= 12) {
                                winnersArray = winnersArray.slice(-11)
                            }
                            winnersArray.push(stateCopy.players[0].name);
                            localStorage.setItem('scoreTable', JSON.stringify(winnersArray));
                        } else {
                        localStorage.setItem('scoreTable', JSON.stringify([stateCopy.players[0].name]));}
                    } else {
                        stateCopy.winnerMessage = 'Player1 wins!';
                        if (localStorage.getItem('scoreTable')) {
                            let winnersArray = JSON.parse(localStorage.getItem('scoreTable'));
                            if (winnersArray.length >= 12) {
                                winnersArray = winnersArray.slice(-11)
                            }
                            winnersArray.push('Player1');
                            localStorage.setItem('scoreTable', JSON.stringify(winnersArray));
                        } else {
                        localStorage.setItem('scoreTable', JSON.stringify(['Player1']));}
                    }

                } else {
                    if (stateCopy.players[1].name) {
                        stateCopy.winnerMessage = `${stateCopy.players[1].name} wins!`;
                        if (localStorage.getItem('scoreTable')) {
                            let winnersArray = JSON.parse(localStorage.getItem('scoreTable'));
                            if (winnersArray.length >= 12) {
                                winnersArray = winnersArray.slice(-11)
                            }
                            winnersArray.push(stateCopy.players[1].name);
                            localStorage.setItem('scoreTable', JSON.stringify(winnersArray));
                        } else {
                        localStorage.setItem('scoreTable', JSON.stringify([stateCopy.players[1].name]));}
                    } else {
                        stateCopy.winnerMessage = 'Player2 wins!';
                        if (localStorage.getItem('scoreTable')) {
                            let winnersArray = JSON.parse(localStorage.getItem('scoreTable'));
                            if (winnersArray.length >= 12) {
                                winnersArray = winnersArray.slice(-11)
                            }
                            winnersArray.push('Player2');
                            localStorage.setItem('scoreTable', JSON.stringify(winnersArray));
                        } else {
                        localStorage.setItem('scoreTable', JSON.stringify(['Player2']));}
                    }
                }
            }
        }
        return stateCopy
    }
    return state
}
export default gameReducer;