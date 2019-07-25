const field3 = [[null, null, null], ['', '', ''], ['', '', ''], ['', '', ''], [null, null, null]]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

let row = getRandomInt(1, 4)
let cell = getRandomInt(1, 4)

function getTestState(symbol, clickPoint, secondPoint, endPoint) {
    let fieldCopy = [...field3]
   fieldCopy = field3.map((el) => {
        return (el.map((el) => {
            return el
        }))
    })
    fieldCopy[clickPoint[0]][clickPoint[1]] = symbol
    fieldCopy[secondPoint[0]][secondPoint[1]] = symbol
    fieldCopy[endPoint[0]][endPoint[1]]= symbol
  return fieldCopy
}

let test = {};

test.cross1_123 = getTestState('x', [1,0], [1,1], [1,2]);
test.cross2_123 = getTestState('x', [2,0], [2,1], [2,2]);
test.cross3_123 = getTestState('x', [3,0], [3,1], [3,2]);

test.zero1_123 = getTestState('o', [1,0], [1,1], [1,2]);
test.zero2_123 = getTestState('o', [2,0], [2,1], [2,2]);
test.zero3_123 = getTestState('o', [3,0], [3,1], [3,2]);

test.cross123_1 = getTestState('x', [1,0], [2,0], [3,0]);
test.cross123_2 = getTestState('x', [1,1], [2,1], [3,1]);
test.cross123_3 = getTestState('x', [1,2], [2,2], [3,2]);

test.zero123_1 = getTestState('o', [1,0], [2,0], [3,0]);
test.zero123_2 = getTestState('o', [1,1], [2,1], [3,1]);
test.zero123_3 = getTestState('o', [1,2], [2,2], [3,2]);

test.cross123_123 = getTestState('x', [1,0], [2,1], [3,2]);
test.cross123_321 = getTestState('x', [1,2], [2,1], [3,0]);

test.zero123_123 = getTestState('o', [1,0], [2,1], [3,2]);
test.zero123_321 = getTestState('o', [1,2], [2,1], [3,0]);

module.exports = test;














