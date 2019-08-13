const expect = require('chai').expect;
const test = require('./testCases');
const findWinner = require('./findWinner');

describe("findWinner", function () {

    it("should return row", function () {
        expect(findWinner(test.crossRow3, 4).type).to.equal('row');
    });
    it("should return row", function () {
        expect(findWinner(test.crossRow9, 4).type).to.equal('row');
    });
    it("should return diag-up-right", function () {
        expect(findWinner(test.crossDiag8, 4).type).to.equal('diag-up-right');
    });
    it("should return diag-up-right", function () {
        expect(findWinner(test.zeroDiag6, 4).type).to.equal('diag-up-right');
    });
    it("should return false", function () {
        expect(findWinner(test.zeroDiag7, 4).winnerDetected).to.equal(false);
    });
    it("should return diag-up-left", function () {
        expect(findWinner(test.zeroDiag3, 4).type).to.equal('diag-up-left');
    });
    it("should return x", function () {
        expect(findWinner(test.crossDiag62, 4).winnerSymbol).to.equal('x');
    });
    it("should return 0", function () {
        expect(findWinner(test.zeroCol50, 4).winnerSymbol).to.equal('0');
    });
    it("should return true", function () {
        expect(findWinner(test.zeroCol50, 4).winnerDetected).to.equal(true);
    });
});
