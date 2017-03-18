
var gameBoard = [10, 10, 10, 10, 10, 10, 10, 10, 10]
var turn = 0
var player = (turn % 2 === 0) ? 1 : 2
var winner = whoWon()

function restart () {
  gameBoard = [10, 10, 10, 10, 10, 10, 10, 10, 10]
  turn = 0
  player = 0
}

function isGameOver () {
  switch (winner) {
    case 3:
      restart()
      return true
      break
    case 2:
      restart()
      return true
      break
    case 1:
      restart()
      return true
      break
    default:
      return false
  }
}

function whoWon () {
  switch (true) {
    case (gameBoard[0] === 1 && gameBoard[1] === 1 && gameBoard[2] === 1):
      console.log(gameBoard)
      return 1
      break
    case (gameBoard[3] === 1 && gameBoard[4] === 1 && gameBoard[5] === 1):
      console.log(gameBoard)
      return 1
      break
    case (gameBoard[6] === 1 && gameBoard[7] === 1 && gameBoard[8] === 1):
      console.log(gameBoard)
      return 1
      break
    case (gameBoard[0] === 1 && gameBoard[3] === 1 && gameBoard[6] === 1):
      console.log(gameBoard)
      return 1
      break
    case (gameBoard[1] === 1 && gameBoard[4] === 1 && gameBoard[7] === 1):
      console.log(gameBoard)
      return 1
      break
    case (gameBoard[2] === 1 && gameBoard[5] === 1 && gameBoard[8] === 1):
      console.log(gameBoard)
      return 1
      break
    case (gameBoard[0] === 1 && gameBoard[4] === 1 && gameBoard[8] === 1):
      console.log(gameBoard)
      return 1
      break
    case (gameBoard[2] === 1 && gameBoard[4] === 1 && gameBoard[6] === 1):
      console.log(gameBoard)
      return 1
      break
    case (gameBoard[0] === 2 && gameBoard[1] === 2 && gameBoard[2] === 2):
      console.log(gameBoard)
      return 2
      break
    case (gameBoard[3] === 2 && gameBoard[4] === 2 && gameBoard[5] === 2):
      console.log(gameBoard)
      return 2
      break
    case (gameBoard[6] === 2 && gameBoard[7] === 2 && gameBoard[8] === 2):
      console.log(gameBoard)
      return 2
      break
    case (gameBoard[0] === 2 && gameBoard[3] === 2 && gameBoard[6] === 2):
      console.log(gameBoard)
      return 2
      break
    case (gameBoard[1] === 2 && gameBoard[4] === 2 && gameBoard[7] === 2):
      console.log(gameBoard)
      return 2
      break
    case (gameBoard[2] === 2 && gameBoard[5] === 2 && gameBoard[8] === 2):
      console.log(gameBoard)
      return 2
      break
    case (gameBoard[0] === 2 && gameBoard[4] === 2 && gameBoard[8] === 2):
      console.log(gameBoard)
      return 2
      break
    case (gameBoard[2] === 2 && gameBoard[4] === 2 && gameBoard[6] === 2):
      console.log(gameBoard)
      return 2
      break
    case (turn === 9):
      console.log(gameBoard)
      return 3
      break
    default:
      console.log(gameBoard)
      return 0
  }
}

function playTurn (index) {
  if (gameBoard[index] !== 10) {
    return false
  } else {
    gameBoard[index] = (turn % 2 === 0) ? 1 : 2
    console.log(gameBoard)
    console.log(turn)
    turn++
    isGameOver ()
    return true
  }
}
