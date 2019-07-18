let assert = require('chai').assert;
let testCases = require('./testCases');

let cellClickAC = (cellId) => {
    return {
        type: cellClickActionType,
        cell: cellId
    }
}
const cellClickActionType = 'CELL-CLICK';

let gameReducer = (state, action) => {
    if (action.type === cellClickActionType) {
        if (state.cells[0].content && state.cells[0].content == state.cells[1].content && state.cells[0].content == state.cells[2].content) {
            if (state.cells[0].content == 'cross') {
                return `${state.players[0].name} wins`
            } else {
                return `${state.players[1].name} wins`
            }
        }
        if (state.cells[3].content && state.cells[3].content == state.cells[4].content && state.cells[3].content == state.cells[5].content) {
            if (state.cells[3].content == 'cross') {
                return `${state.players[0].name} wins`
            } else {
                return `${state.players[1].name} wins`
            }
        }
        if (state.cells[6].content && state.cells[6].content == state.cells[7].content && state.cells[6].content == state.cells[8].content) {
            if (state.cells[6].content == 'cross') {
                return `${state.players[0].name} wins`
            } else {
                return `${state.players[1].name} wins`
            }
        }
        if (state.cells[0].content && state.cells[0].content == state.cells[3].content && state.cells[0].content == state.cells[6].content) {
            if (state.cells[0].content == 'cross') {
                return `${state.players[0].name} wins`
            } else {
                return `${state.players[1].name} wins`
            }
        }
        if (state.cells[1].content && state.cells[1].content == state.cells[4].content && state.cells[1].content == state.cells[7].content) {
            if (state.cells[1].content == 'cross') {
                return `${state.players[0].name} wins`
            } else {
                return `${state.players[1].name} wins`
            }
        }
        if (state.cells[2].content && state.cells[2].content == state.cells[5].content && state.cells[2].content == state.cells[8].content) {
            if (state.cells[2].content == 'cross') {
                return `${state.players[0].name} wins`
            } else {
                return `${state.players[1].name} wins`
            }
        }
        if (state.cells[0].content && state.cells[0].content == state.cells[4].content && state.cells[0].content == state.cells[8].content) {
            if (state.cells[0].content == 'cross') {
                return `${state.players[0].name} wins`
            } else {
                return `${state.players[1].name} wins`
            }
        }
        if (state.cells[2].content && state.cells[2].content == state.cells[4].content && state.cells[2].content == state.cells[6].content) {
            if (state.cells[2].content == 'cross') {
                return `${state.players[0].name} wins`
            } else {
                return `${state.players[1].name} wins`
            }
        }
        if (state.clicks == 9) {
            return 'Its a draw'
        }
        return 'Game continues'
    }
}

describe('detectWinner', function () {
    it('should return Masha wins', function () {
        assert.equal(gameReducer(testCases.cross123, cellClickAC(5)), 'Masha wins')
    })
    it('should return Dima wins', function () {
        assert.equal(gameReducer(testCases.zero123, cellClickAC(5)), 'Dima wins')
    })
    it('should return Masha wins', function () {
        assert.equal(gameReducer(testCases.cross456, cellClickAC(5)), 'Masha wins')
    })
    it('should return Dima wins', function () {
        assert.equal(gameReducer(testCases.zero456, cellClickAC(5)), 'Dima wins')
    })
    it('should return Masha wins', function () {
        assert.equal(gameReducer(testCases.cross789, cellClickAC(5)), 'Masha wins')
    })
    it('should return Dima wins', function () {
        assert.equal(gameReducer(testCases.zero789, cellClickAC(5)), 'Dima wins')
    })
    it('should return Sveta wins', function () {
        assert.equal(gameReducer(testCases.cross147, cellClickAC(5)), 'Sveta wins')
    })
    it('should return Vova wins', function () {
        assert.equal(gameReducer(testCases.zero147, cellClickAC(5)), 'Vova wins')
    })
    it('should return Sveta wins', function () {
        assert.equal(gameReducer(testCases.cross258, cellClickAC(5)), 'Sveta wins')
    })
    it('should return Vova wins', function () {
        assert.equal(gameReducer(testCases.zero258, cellClickAC(5)), 'Vova wins')
    })
    it('should return Sveta wins', function () {
        assert.equal(gameReducer(testCases.cross369, cellClickAC(5)), 'Sveta wins')
    })
    it('should return Vova wins', function () {
        assert.equal(gameReducer(testCases.zero369, cellClickAC(5)), 'Vova wins')
    })
    it('should return Zhenya wins', function () {
        assert.equal(gameReducer(testCases.cross159, cellClickAC(5)), 'Zhenya wins')
    })
    it('should return Igor wins', function () {
        assert.equal(gameReducer(testCases.zero159, cellClickAC(5)), 'Igor wins')
    })
    it('should return Zhenya wins', function () {
        assert.equal(gameReducer(testCases.cross357, cellClickAC(5)), 'Zhenya wins')
    })
    it('should return Igor wins', function () {
        assert.equal(gameReducer(testCases.zero357, cellClickAC(5)), 'Igor wins')
    })   
     it('should return "Its a draw"', function () {
        assert.equal(gameReducer(testCases.draw, cellClickAC(9)), 'Its a draw')
    })
    it('should return Game continues', function () {
        assert.equal(gameReducer(testCases.cross12, cellClickAC(9)), 'Game continues')
    })
    it('should return Game continues', function () {
        assert.equal(gameReducer(testCases.zero139, cellClickAC(9)), 'Game continues')
    })
    it('should return Sasha wins', function () {
        assert.equal(gameReducer(testCases.zero123full, cellClickAC(9)), 'Sasha wins')
    })
})