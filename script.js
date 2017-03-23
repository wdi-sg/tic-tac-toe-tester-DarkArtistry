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

document.addEventListener('DOMContentLoaded', function () {
  function move () {

  }

  body.addEventListener('click', move)
})
