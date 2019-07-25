const expect = require('chai').expect;
const test = require('./testCases');

let findWinner = function(field, clickPoint) {
    let row = clickPoint[0];
    let cell = clickPoint[1];
    let result
     switch (field[row][cell]) {
        case field[row][cell+1]: 
          switch (field[row][cell+1]) {
            case field[row][cell+2]:
              result = `winner is in row${row}, cells${cell}${cell+1}${cell+2}`
            break;
            case field[row][cell-1]:
              result = `winner is in row${row}, cells${cell}${cell+1}${cell-1}`
            break;
          }
        break;
        case field[row][cell-1]:
            switch (field[2][cell-1]) {
              case field[2][cell-2]: 
              result = `winner is in row${row}, cells${cell}${cell-1}${cell-2}`
              break;
            }
        break;
        case field[row-1][cell]:
          switch (field[row-1][cell]) {
            case field[row-2][cell]:
            result = `winner is in rows${row}${row-1}${row-2}, cell${cell}`
            break;
            case  field[row+1][cell]:
            result = `winner is in rows${row}${row-1}${row+1}, cell${cell}`
          }
         break;
         case field[row+1][cell]:
          switch (field[row+1][cell]) {
            case field[row+2][cell]:
              result = `winner is in rows${row}${row+1}${row+2}, cell${cell}`
            break;
          }
         break;
         case field[row-1][cell+1]:
          switch (field[row-1][cell+1]) {
            case field[row-2][cell+2]:
              result = `winner is in rows${row}${row-1}${row-2}, cells${cell}${cell+1}${cell+2}`
            break;
            case field[row+1][cell-1]:
              result = `winner is in rows${row}${row-1}${row+1}, cells${cell}${cell+1}${cell-1}`
            break;
          }
        break;
        case field[row+1][cell-1]:
          switch(field[row+1][cell-1]) {
            case field[row+2][cell-2]:
              result = `winner is in rows${row}${row+1}${row+2}, cells${cell}${cell-1}${cell-2}`;
              break;
          }
         break;
         case field[row-1][cell-1]:
          switch (field[row-1][cell-1]) {
            case field[row-2][cell-2]:
              result = `winner is in rows${row}${row-1}${row-2}, cells${cell}${cell-1}${cell-2}`;
            break;
            case field[row+1][cell+1]:
              result = `winner is in rows${row}${row-1}${row+1}, cells${cell}${cell-1}${cell+1}`;
            break;
          }
        break;
        case field[row+1][cell+1]:
          switch(field[row+1][cell+1]) {
            case field[row+2][cell+2]:
              result = `winner is in rows${row}${row+1}${row+2}, cells${cell}${cell+1}${cell+2}`;
            break;
          }
        break;
        default:
                result = 'nobody wins';        
      }
    return result
}

describe("find winner", function() {
    it("should find winner in 1 row, cells210", function () {
        let result = findWinner(test.cross1_123, [1, 2])
        expect(result).to.equal('winner is in row1, cells210');
    });
    it("should find winner in 2 row, cells210", function () {
        expect(findWinner(test.cross2_123, [2, 2])).to.equal('winner is in row2, cells210');
    });
    it("should find winner in 3 row, cells210", function () {
        expect(findWinner(test.cross3_123, [3, 2])).to.equal('winner is in row3, cells210');
    });
    it("should find winner in 1 row, cells210", function () {
        expect(findWinner(test.zero1_123, [1, 2])).to.equal('winner is in row1, cells210');
    });
    it("should find winner in rows123, cell0", function () {
        expect(findWinner(test.cross123_1, [1, 0])).to.equal('winner is in rows123, cell0');
    });
    it("should find winner in rows213, cell0", function () {
        expect(findWinner(test.cross123_1, [2, 0])).to.equal('winner is in rows213, cell0');
    });
    it("should find winner in rows321, cell0", function () {
        expect(findWinner(test.cross123_1, [3, 0])).to.equal('winner is in rows321, cell0');
    });
    it("should find winner in rows321, cell1", function () {
        expect(findWinner(test.cross123_2, [3, 1])).to.equal('winner is in rows321, cell1');
    });
    it("should find winner in rows213, cell1", function () {
        expect(findWinner(test.cross123_2, [2, 1])).to.equal('winner is in rows213, cell1');
    });
    it("should find winner in rows213, cell2", function () {
        expect(findWinner(test.cross123_3, [2, 2])).to.equal('winner is in rows213, cell2');
    });
    it("should find winner in rows213, cells102", function () {
        expect(findWinner(test.cross123_123, [2, 1])).to.equal('winner is in rows213, cells102');
    });
    it("should find winner in rows123, cells012", function () {
        expect(findWinner(test.cross123_123, [1, 0])).to.equal('winner is in rows123, cells012');
    });
    it("should find winner in rows123, cells210", function () {
        expect(findWinner(test.cross123_321, [1, 2])).to.equal('winner is in rows123, cells210');
    });

  });