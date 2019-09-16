
const util = require("./utility")

// input size of array
console.log("input size of array")
var size = parseInt(util.data.input())
//taking input in array to sort .
var arr = util.data.inputarray(size)

// holding sorted array returnd by function
var sorted = util.data.bubbleSort(arr)

// templtets string.
console.log(`sorted ${sorted}`)