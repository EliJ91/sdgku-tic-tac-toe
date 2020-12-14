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
      test("board updates are in correct squares", ()=>{
        const board = new Board()
        board.put("X", 0)
        board.put("Y", 4)
        const status = board.status()
        expect(status).toEqual(["X", 1, 2, 3,"Y", 5, 6, 7, 8])
      })
    })

  describe("Board.status", ()=>{
      test("returns the rows of the board", ()=>{
        const board = new Board()
        const rows = board.status()
        expect(rows).not.toBe(null)
      })
    })

  describe("Board.checkColumnWins", ()=>{
      test("returns if column 1 contains a win", ()=>{
        const board = new Board()
        for (const number of [0,3,6]) {
          board.put("X", number);
        }
        const win = board.columnWin("X")
        expect(win).toEqual(["X",[0,3,6]])
      })

      test("returns if column 2 contains a win", ()=>{
        const board = new Board()
        for (const number of [1,4,7]) {
          board.put("Y", number);
        }
        const win = board.columnWin("Y")
        expect(win).toEqual(["Y",[1,4,7]])
      })

      test("returns if column 3 contains a win", ()=>{
        const board = new Board()
        for (const number of [2,5,8]) {
          board.put("X", number);
        }
        const win = board.columnWin("X")
        expect(win).toEqual(["X",[2,5,8]])
      })
    })

  describe("Board.checkRowWins", ()=>{
    test("returns if row 1 contains a win", ()=>{
      const board = new Board()
      for (const number of [0,1,2]) {
        board.put("X", number);
      }
      const win = board.rowWin("X")
      expect(win).toEqual(["X",[0,1,2]])
    })

    test("returns if row 2 contains a win", ()=>{
      const board = new Board()
      for (const number of [3,4,5]) {
        board.put("Y", number);
      }
      const win = board.rowWin("Y")
      expect(win).toEqual(["Y",[3,4,5]])
    })

    test("returns if row 3 contains a win", ()=>{
      const board = new Board()
      for (const number of [6,7,8]) {
        board.put("X", number);
      }
      const win = board.rowWin("X")
      expect(win).toEqual(["X",[6,7,8]])
    })
  })

  describe("Board.checkDiagonalWins", ()=>{
    test("returns if diagonal 1 contains a win", ()=>{
      const board = new Board()
      for (const number of [0,4,8]) {
        board.put("Y", number);
      }
      const win = board.diagonalWin("Y")
      expect(win).toEqual(["Y",[0,4,8]])
    })
    test("returns if diagonal 2 contains a win", ()=>{
      const board = new Board()
      for (const number of [2,4,6]) {
        board.put("X", number);
      }
      const win = board.diagonalWin("X")
      expect(win).toEqual(["X",[2,4,6]])
    })
  })

})
