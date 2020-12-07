import {describe, test, expect} from '@jest/globals'

import { Board } from './board'

describe("Board", () => {
  describe("setting and getting squares", ()=>{
    test("can set specific square value", () => {
      const board = new Board()
      board.put("X", 1)
      expect(board.at(1)).toBe("X")
    })

    test.skip("passing non X or Y throws an invalid character error", ()=>{
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
    })

    test.skip("passing position below 1 or above 9 results in out of range error", ()=>{
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
    })
  })

  describe("Board.rows", ()=>{
    test.skip("returns the rows of the board", ()=>{})
    test.skip("rows has length of 3", ()=>{})
    test.skip("each row has length of 3", ()=>{})
  })

  describe("Board.columns", ()=>{
    test.skip("returns the columns of the board", ()=>{})
    test.skip("columns has length of 3", ()=>{})
    test.skip("each column has length of 3", ()=>{})
  })

  describe("Board.diagonals", ()=>{
    test.skip("returns the diagonals of the board", ()=>{})
    test.skip("diagonals has length of 2", ()=>{})
    test.skip("each diagonal has length of 3", ()=>{})
  })
})
