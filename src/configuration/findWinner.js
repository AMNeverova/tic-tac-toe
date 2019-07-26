import config from './config.json';

let findWinner = function (field, clickPoint) {
  let row = clickPoint[0];
  let cell = clickPoint[1];
  let result
  let cellsAmount = 0;
  let cellsFilled = 0;

  switch (field[row][cell]) {
    case field[row][cell + 1]:
      switch (field[row][cell + 1]) {
        case field[row][cell + 2]:
          result = {
            winnerLocation: [
              [row, cell],
              [row, cell + 1],
              [row, cell + 2]
            ],
            winnerSymbol: field[row][cell]
          }

          break;
        case field[row][cell - 1]:
          result = {
            winnerLocation: [
              [row, cell - 1],
              [row, cell],
              [row, cell + 1]
            ],
            winnerSymbol: field[row][cell]
          }
          break;
        default:
          result = '';
      }
      break;
    case field[row][cell - 1]:
      switch (field[row][cell - 1]) {
        case field[row][cell - 2]:
          result = {
            winnerLocation: [
              [row, cell - 2],
              [row, cell - 1],
              [row, cell],
            ],
            winnerSymbol: field[row][cell]
          }
          break;
        default:
          result = '';
      }
      break;
    case field[row - 1][cell]:
      switch (field[row - 1][cell]) {
        case field[row - 2][cell]:
          result = {
            winnerLocation: [
              [row - 2, cell],
              [row - 1, cell],
              [row, cell]
            ],
            winnerSymbol: field[row][cell]
          }
          break;
        case field[row + 1][cell]:
          result = {
            winnerLocation: [
              [row - 1, cell],
              [row, cell],
              [row + 1, cell]
            ],
            winnerSymbol: field[row][cell]
          }
          break;
        default:
          result = '';
      }
      break;
    case field[row + 1][cell]:
      switch (field[row + 1][cell]) {
        case field[row + 2][cell]:
          result = {
            winnerLocation: [
              [row, cell],
              [row + 1, cell],
              [row + 2, cell]
            ],
            winnerSymbol: field[row][cell]
          }
          break;
        default:
          result = '';
      }
      break;
    case field[row - 1][cell + 1]:
      switch (field[row - 1][cell + 1]) {
        case field[row - 2][cell + 2]:
          result = {
            winnerLocation: [
              [row - 2, cell + 2],
              [row - 1, cell + 1],
              [row, cell],
            ],
            winnerSymbol: field[row][cell]
          }
          break;
        case field[row + 1][cell - 1]:
          result = {
            winnerLocation: [
              [row - 1, cell + 1],
              [row, cell],
              [row + 1, cell - 1]
            ],
            winnerSymbol: field[row][cell]
          }
          break;
        default:
          result = '';
      }
      break;
    case field[row + 1][cell - 1]:
      switch (field[row + 1][cell - 1]) {
        case field[row + 2][cell - 2]:
          result = {
            winnerLocation: [
              [row, cell],
              [row + 1, cell - 1],
              [row + 2, cell - 2]
            ],
            winnerSymbol: field[row][cell]
          }
          break;
        default:
          result = '';
      }
      break;
    case field[row - 1][cell - 1]:
      switch (field[row - 1][cell - 1]) {
        case field[row - 2][cell - 2]:
          result = {
            winnerLocation: [
              [row - 2, cell - 2],
              [row - 1, cell - 1],
              [row, cell],
            ],
            winnerSymbol: field[row][cell]
          }
          break;
        case field[row + 1][cell + 1]:
          result = {
            winnerLocation: [
              [row - 1, cell - 1],
              [row, cell],
              [row + 1, cell + 1]
            ],
            winnerSymbol: field[row][cell]
          }
          break;
        default:
          result = '';
      }
      break;
    case field[row + 1][cell + 1]:
      switch (field[row + 1][cell + 1]) {
        case field[row + 2][cell + 2]:
          result = {
            winnerLocation: [
              [row, cell],
              [row + 1, cell + 1],
              [row + 2, cell + 2]
            ],
            winnerSymbol: field[row][cell]
          }
          break;
        default:
          result = '';
      }
      break;
    default:
      result = '';
  }
  for (let i = 1; i <= field.length - 2; i++) {
    for (let j = 0; j <= field[i].length - 1; j++) {
      cellsAmount++
      if (field[i][j]) {
        cellsFilled++
      }
    }
  }
  console.log(cellsAmount)
  console.log(cellsFilled)
  if (cellsAmount == cellsFilled && !result) {
    result = config.drawGame
  }
  console.log(result)
  return result
}

export default findWinner;