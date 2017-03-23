// console.log('javascript here')
//
// var listItems = Array.from(document.getElementsByClassName('list-items'))
//
// console.log(listItems)
//
// // the below cannot work as forEAch only works for arrays
// // unless you conver it with Array.from
// listItems.forEach(function (item) {
//   item.textContent = 'something'
// })
//
// function list (names) {
//   // console.log(names[1])
//   var output = ''
//   names = Array.from(names)
//   console.log(names[0], names[0].name)
//   output = names.reduce(function (accu, val, index) {
//     console.log(accu, val.name)
//
//     if (names.length === 1) {
//       return val.textContent
//     } else if (index === names.length - 1) {
//       accu += ' & ' + val.textContent
//     } else if (index === names.length - 2) {
//       accu += val.textContent
//     } else {
//       accu += val.textContent + ', '
//     }
//     return output
//   }, '')
//
//   // var input =
//   return finalStr
// }
//
// // for (var i = 0; i < listItems.length; i++) {
// //   listItems[i].textContent = 'something'
// // }
//
// function printAllNames () {
//   var allNames = document.querySelectorAll('.list-items')
//   console.log(allNames)
//   var output = list(allNames)
//   document.querySelector('h1').textContent = output
// }
//
// var button = document.querySelector('button')
// button.addEventListener('click', printAllNames)

// English calculator
// document.addEventListener('DOMContentLoaded', function () {
//   var button = document.querySelector('button')
//   console.log('hi')
//   var opera = ['+', '-', '*', '%', '/']
//
//   function calulateNow () {
//     var num1 = parseInt(document.querySelector('#firstNum').value)
//     var opr = document.querySelector('#operator').value
//     var num2 = parseInt(document.querySelector('#secondNum').value)
//
//     if (opr === '+') {
//       document.querySelector('#result').textContent = num1 + num2
//     } else if (opr === '-') {
//       document.querySelector('#result').textContent = num1 - num2
//     } else if (opr === '/') {
//       document.querySelector('#result').textContent = num1 / num2
//     } else if (opr === '*') {
//       document.querySelector('#result').textContent = num1 * num2
//     } else if (opr === '%') {
//       document.querySelector('#result').textContent = num1 % num2
//     } else {
//       document.querySelector('#result').textContent = 'Invalid Calculation'
//     }
//     console.log(num1)
//     console.log(opr)
//   }
//
//   button.addEventListener('click', calulateNow)
// })

// Mouse Click

$(document).ready(function () {
  var grid = [null, null, null, null, null, null, null, null, null]
  var player = 1
  var $clickBox = $(document).find('.box')

  $clickBox.on('click', function (e) {
    var turn = playTurn($clickBox.index($(this)))
    if (turn === true) {
      if (player === 1) {
        e.currentTarget.textContent = 'X'
        e.currentTarget.style.backgroundColor = 'red'
      } else {
        e.currentTarget.textContent = 'O'
        e.currentTarget.style.backgroundColor = 'black'
      }
      console.log(e)
      console.log(grid)
    }
  })

  function playTurn (index) {
    if (grid[index] || isGameOver()) {
      console.log($clickBox.text)
      return false
    } else {
      grid[index] = player
      if (player === 1) player = 2
      else player = 1
      return true
    }
  }

  function isGameOver () {
    if (whoWon()) {
      restart()
      alert('Game Over!')
      return true
    }
    return false
  }

  function whoWon () {
    if (grid[0] && grid[0] === grid[1] && grid[0] === grid[2]) return grid[0]
    if (grid[3] && grid[3] === grid[4] && grid[3] === grid[5]) return grid[3]
    if (grid[6] && grid[6] === grid[7] && grid[6] === grid[8]) return grid[6]
    if (grid[0] && grid[0] === grid[3] && grid[0] === grid[6]) return grid[0]
    if (grid[1] && grid[1] === grid[4] && grid[1] === grid[7]) return grid[1]
    if (grid[2] && grid[2] === grid[5] && grid[2] === grid[8]) return grid[2]
    if (grid[0] && grid[0] === grid[4] && grid[0] === grid[8]) return grid[0]
    if (grid[2] && grid[2] === grid[4] && grid[2] === grid[6]) return grid[2]
    if (grid[0] && grid[1] && grid[2] && grid[3] && grid[4] &&
   grid[5] && grid[6] && grid[7] && grid[8]) return 3
    return 0
  }

  function restart () {
    grid = [null, null, null, null, null, null, null, null, null]
    player = 1
    var allBox = $clickBox
    allBox.textContent = ''
  }
})
