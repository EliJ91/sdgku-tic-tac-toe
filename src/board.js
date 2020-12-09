
export class InvalidToken extends Error {}

export class OutOfRange extends Error{}

export class Board {
  constructor() {
    this._state = [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]
  }

  put(token,index){
    if (token != "X" && token != "Y") {
      throw new InvalidToken(`${token} is not a valid token, please use X or Y`)
    }
    if (index < 1  || index > 9){
        throw new OutOfRange(`${index} is out of acceptable range, please select a number between 1 and 9`)
    }
    const [row, col] = this._coordinatesFromIndex(index)
    return this._state[row][col] = token
  }

  at(index){
    if (index < 1  || index > 9){
        throw new OutOfRange(`${index} is out of acceptable range, please select a number between 1 and 9`)
    }
    const [row, col] = this._coordinatesFromIndex(index)
    return this._state[row][col]
  }

  rows(){
      return this._state
  }

  _coordinatesFromIndex(index) {
    const size = 3
    const zeroBase = index - 1

    const row = Math.floor(zeroBase / size)
    const col = zeroBase % size

    return [row, col]
  }
}
