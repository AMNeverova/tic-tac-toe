const field = [['', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', '']]

function getTestCase (symbol, firstPoint, type) {
    let fieldCopy = [...field]
   fieldCopy = field.map((el) => {
        return (el.map((el) => {
            return el
        }))
    })

    switch(type) {
      case 'row':
          for (let i = 0; i <= 3; i++) {
            if (fieldCopy[firstPoint[0]]) {
            fieldCopy[firstPoint[0]][firstPoint[1] + i] = symbol;
            }
          }
      break;
      case 'col':
        for (let i = 0; i <= 3; i++) {
          if (fieldCopy[firstPoint[0] + i]) {
          fieldCopy[firstPoint[0] + i][firstPoint[1]] = symbol;
          }
        }
      break;
      case 'diag-down-left':
        for (let i = 0; i <= 3; i++) {
          if (fieldCopy[firstPoint[0] + i]) {
          fieldCopy[firstPoint[0] + i][firstPoint[1] - i] = symbol;
          }
        }
      break;
      case 'diag-down-right':
          for (let i = 0; i <= 3; i++) {
            if (fieldCopy[firstPoint[0] + i]) {
            fieldCopy[firstPoint[0] + i][firstPoint[1] + i] = symbol;
            }
          }
      break;
    }
  return fieldCopy
}

let test = {};

test.crossRow3 = getTestCase('x', [3, 2], 'row');
test.crossRow9 = getTestCase('x', [9, 2], 'row');
test.crossDiag8 = getTestCase('x', [4, 4], 'diag-down-left');
test.zeroDiag6 = getTestCase('0', [6, 9], 'diag-down-left');
test.zeroDiag7 = getTestCase('0', [7, 9], 'diag-down-left');
test.zeroDiag3 = getTestCase('0', [3, 0], 'diag-down-right');
test.crossDiag62 = getTestCase('x', [6, 2], 'diag-down-right');
test.zeroCol50 = getTestCase('0', [5, 0], 'col');
test.zeroCol72 = getTestCase('0', [7, 2], 'col');

module.exports = test;
