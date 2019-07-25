let findWinner = function(field, clickPoint) {
    let row = clickPoint[0];
    let cell = clickPoint[1];
    let result
     switch (field[row][cell]) {
        case field[row][cell+1]: 
          switch (field[row][cell+1]) {
            case field[row][cell+2]:
              result = {
                  winnerLocation: [[row, cell], [row, cell+1], [row, cell+2]],
                  winnerSymbol: field[row][cell]
              }
              
            break;
            case field[row][cell-1]:
              result = {
                  winnerLocation: [[row, cell], [row, cell+1], [row, cell-1]],
                  winnerSymbol: field[row][cell]
              }
            break;
          }
        break;
        case field[row][cell-1]:
            switch (field[row][cell-1]) {
              case field[row][cell-2]: 
              result = {
                  winnerLocation: [[row, cell], [row, cell-1], [row, cell-2]],
                  winnerSymbol: field[row][cell]
              }
              break;
            }
        break;
        case field[row-1][cell]:
          switch (field[row-1][cell]) {
            case field[row-2][cell]:
            result = {
                winnerLocation: [[row, cell], [row-1, cell], [row-2, cell]],
                winnerSymbol: field[row][cell]
            }
            break;
            case  field[row+1][cell]:
            result = {
                winnerLocation: [[row, cell], [row-1, cell], [row+1, cell]],
                winnerSymbol: field[row][cell]
          }
            break;
        }
         break;
        
         
         case field[row+1][cell]:
          switch (field[row+1][cell]) {
            case field[row+2][cell]:
              result = {
                  winnerLocation: [[row, cell], [row+1, cell], [row+2, cell]],
                  winnerSymbol: field[row][cell]
              }
            break;
            }
         break;

         case field[row-1][cell+1]:
          switch (field[row-1][cell+1]) {
            case field[row-2][cell+2]:
              result = {
                  winnerLocation: [[row, cell], [row-1, cell+1], [row-2, cell+2]],
                  winnerSymbol: field[row][cell]
              }
            break;
            case field[row+1][cell-1]:
              result = {
                  winnerLocation: [[row, cell], [row-1, cell+1], [row+1, cell-1]],
                  winnerSymbol: field[row][cell]
              }
            break;
          }
        break;
        case field[row+1][cell-1]:
          switch(field[row+1][cell-1]) {
            case field[row+2][cell-2]:
              result = {
                  winnerLocation: [[row, cell], [row+1, cell-1], [row+2, cell-2]],
                  winnerSymbol: field[row][cell]
              }
              break;
          }
         break;
         case field[row-1][cell-1]:
          switch (field[row-1][cell-1]) {
            case field[row-2][cell-2]:
              result = {
                  winnerLocation: [[row, cell], [row-1, cell-1], [row-2, cell-2]],
                  winnerSymbol: field[row][cell]
              }
            break;
            case field[row+1][cell+1]:
              result = {
                  winnerLocation: [[row, cell], [row-1, cell-1], [row+1, cell+1]],
                  winnerSymbol: field[row][cell]
              }
            break;
          }
        break;
        case field[row+1][cell+1]:
          switch(field[row+1][cell+1]) {
            case field[row+2][cell+2]:
              result = {
                  winnerLocation: [[row, cell], [row+1, cell+1], [row+2, cell+2]],
                  winnerSymbol: field[row][cell]
              }
            break;
          }
        break;
        default:
                result = '';        
      }
      console.log(result)
    return result
}


export default findWinner;
