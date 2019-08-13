let findWinner = module.exports = function (field, n) {
    let result = {
      winnerDetected: false,
      type: '',
      coordinates: [],
      lastPoint: [],
      winnerSymbol: ''
    }
  
    let cellsAmount = 0;
    let cellsFilled = 0;
  
    for (let i = 0; i < field.length; i++) {
      let counter = 1;
      for (let j = 0; j < field[i].length - 1; j++) {
        if (field[i][j] && field[i][j] === field[i][j + 1]) {
          counter += 1;
          if (counter === n) {
            result.winnerDetected = true;
            result.type = 'row';
            result.lastPoint.push(i, j + 1);
            result.winnerSymbol = field[i][j];
          }
        } else {
          counter = 1;
        }
      }
    }
  
    for (let j = 0; j < field.length; j++) {
      let counter = 1;
      for (let i = 0; i < field[j].length - 1; i++) {
        if (field[i][j] && field[i][j] === field[i + 1][j]) {
          counter += 1;
          if (counter === n) {
            result.winnerDetected = true;
            result.type = 'col';
            result.lastPoint.push(i + 1, j);
            result.winnerSymbol = field[i][j];
          }
        } else {
          counter = 1
        }
      }
    }
  
    for (let i = 0; i <= field.length - 1; i++) {
      let startPoint = [0, i];
      let counter = 1;
      for (let j = 0; j < field.length - 1; j++) {
        if (startPoint[0] + j < field.length - 1 && startPoint[1] + j < field.length - 1) {
          if (field[startPoint[0] + j][startPoint[1] + j] && field[startPoint[0] + j][startPoint[1] + j] === field[startPoint[0] + j + 1][startPoint[1] + j + 1]) {
            counter += 1;
            if (counter === n) {
              result.winnerDetected = true;
              result.type = 'diag-up-left';
              result.lastPoint.push(startPoint[0] + j + 1, startPoint[1] + j + 1);
              result.winnerSymbol = field[startPoint[0] + j][startPoint[1] + j];
            }
          } else {
            counter = 1;
          }
        }
      }
    }
  
    for (let i = 1; i <= field.length - 1; i++) {
      let startPoint = [i, 0];
      let counter = 1;
      for (let j = 0; j < field.length - 1; j++) {
        if (startPoint[0] + j < field.length - 1 && startPoint[1] + j < field.length - 1) {
          if (field[startPoint[0] + j][startPoint[1] + j] && field[startPoint[0] + j][startPoint[1] + j] === field[startPoint[0] + j + 1][startPoint[1] + j + 1]) {
            counter += 1;
            if (counter === n) {
              result.winnerDetected = true;
              result.type = 'diag-up-left';
              result.lastPoint.push(startPoint[0] + j + 1, startPoint[1] + j + 1);
              result.winnerSymbol = field[startPoint[0] + j][startPoint[1] + j];
            }
          } else {
            counter = 1;
          }
        }
      }
    }
  
    for (let i = field.length - 1; i >= 0; i--) {
      let startPoint = [0, i];
      let counter = 1;
      for (let j = 0; j < field.length - 1; j++) {
        if ((startPoint[0] + j) < field.length - 1 && (startPoint[1] - j) >= 0) {
          if (field[startPoint[0] + j][startPoint[1] - j] && field[startPoint[0] + j][startPoint[1] - j] === field[startPoint[0] + j + 1][startPoint[1] - j - 1]) {
            counter += 1;
            if (counter === n) {
              result.winnerDetected = true;
              result.type = 'diag-up-right',
                result.lastPoint.push(startPoint[0] + j + 1, startPoint[1] - j - 1);
              result.winnerSymbol = field[startPoint[0] + j][startPoint[1] - j];
            }
          } else {
            counter = 1;
          }
        }
      }
    }
  
    for (let i = 1; i <= field.length - 1; i++) {
      let startPoint = [i, field.length - 1];
      let counter = 1;
      for (let j = 0; j < field.length - 1; j++) {
        if (startPoint[0] + j < field.length - 1 && startPoint[1] - j > 0) {
          if (field[startPoint[0] + j][startPoint[1] - j] && field[startPoint[0] + j][startPoint[1] - j] === field[startPoint[0] + j + 1][startPoint[1] - j - 1]) {
            counter += 1;
            if (counter === n) {
              result.winnerDetected = true;
              result.type = 'diag-up-right',
                result.lastPoint.push(startPoint[0] + j + 1, startPoint[1] - j - 1);
              result.winnerSymbol = field[startPoint[0] + j][startPoint[1] - j];
            }
          } else {
            counter = 1;
          }
        }
      }
    }
  
    if (result.winnerDetected) {
      switch (result.type) {
        case 'row':
          for (let i = 0; i < n; i++) {
            result.coordinates.unshift([result.lastPoint[0], result.lastPoint[1] - i])
          }
          break;
        case 'col':
          for (let i = 0; i < n; i++) {
            result.coordinates.unshift([result.lastPoint[0] - i, result.lastPoint[1]])
          }
          break;
        case 'diag-up-left':
          for (let i = 0; i < n; i++) {
            result.coordinates.unshift([result.lastPoint[0] - i, result.lastPoint[1] - i])
          }
          break;
        case 'diag-up-right':
          for (let i = 0; i < n; i++) {
            result.coordinates.unshift([result.lastPoint[0] - i, result.lastPoint[1] + i])
          }
          break;
      }
      return result;
    }
  
    for (let i = 0; i <= field.length - 1; i++) {
      for (let j = 0; j <= field[i].length - 1; j++) {
        cellsAmount++
        if (field[i][j]) {
          cellsFilled++;
        }
      }
    }
    if (cellsAmount === cellsFilled && !result.winnerDetected) {
      result.type = config.drawGame;
    }
  return result;
  }
