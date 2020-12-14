
export class InvalidToken extends Error {}

export class OutOfRange extends Error{}

export class Board {
  constructor() {
    this._state = [0,1,2,3,4,5,6,7,8]
    //[0,1,2]
    //[3,4,5]
    //[6,7,8]
  }

  put(token,index){
    if (token != "X" && token != "Y") {
      throw new InvalidToken(`${token} is not a valid token, please use X or Y`)
    }
    if (index < 0  || index > 8){
        throw new OutOfRange(`${index} is out of acceptable range, please select a number between 1 and 9`)
    }
    return this._state[index] = token
  }

  at(index){
    if (index < 1  || index > 8){
        throw new OutOfRange(`${index} is out of acceptable range, please select a number between 1 and 9`)
    }
    return this._state[index]
  }

  status(){
      return this._state
  }

  columnWin(token){
    if([this._state[0],this._state[3],this._state[6]].every((i)=> i == token )) return [token,[0,3,6]]
    if([this._state[1],this._state[4],this._state[7]].every((i)=> i == token )) return [token,[1,4,7]]
    if([this._state[2],this._state[5],this._state[8]].every((i)=> i == token )) return [token,[2,5,8]]
    return false
  }

  rowWin(token){
    if([this._state[0],this._state[1],this._state[2]].every((i)=> i == token )) return [token,[0,1,2]]
    if([this._state[3],this._state[4],this._state[5]].every((i)=> i == token )) return [token,[3,4,5]]
    if([this._state[6],this._state[7],this._state[8]].every((i)=> i == token )) return [token,[6,7,8]]
    return false
  }

  diagonalWin(token){
    if([this._state[0],this._state[4],this._state[8]].every((i)=> i == token )) return [token,[0,4,8]]
    if([this._state[2],this._state[4],this._state[6]].every((i)=> i == token )) return [token,[2,4,6]]
    return false
  }
}
