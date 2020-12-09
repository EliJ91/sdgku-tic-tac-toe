import {describe, test, expect} from '@jest/globals'

import { Board } from './board'

describe("Board", () => {
  describe("setting and getting squares", ()=>{
    test("can set specific square value", () => {
      const board = new Board()
      board.put("X", 1)
      expect(board.at(1)).toBe("X")
    })

    test("passing non X or Y throws an invalid character error when setting", ()=>{
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
      const board = new Board()
      expect(()=> board.put("Z", 1)).toThrowError()
    })

    test("passing position below 1 or above 9 to put results in out of range error", ()=>{
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
      const board = new Board()
      expect(()=> board.put("Y", 10)).toThrowError()
    })

    test("passing position below 1 or above 9 to at results in out of range error", ()=>{
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
      const board = new Board()
      expect(()=> board.at(10)).toThrowError()
    })
  })

  describe("Board.rows", ()=>{
    test("returns the rows of the board", ()=>{
      const board = new Board()
      const rows = board.rows()
      expect(rows).not.toBe(null)
    })
    test("board updates are in correct squares", ()=>{
      const board = new Board()
      board.put("X", 1)
      board.put("Y", 5)
      const rows = board.rows()
      expect(rows).toEqual([["X", 2, 3], [4, "Y", 6], [7, 8, 9]])
    })
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
