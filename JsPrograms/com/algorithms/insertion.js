// add require in path to access all method presents in utitlity file.

const util = require("./utility")

// input size of array
console.log("input size of array")
var size = parseInt(util.data.input())
//taking input in array to sort .
var arr = util.data.inputarray(size)

// holding sorted array returnd by function
var sorted = util.data.insertionSort(arr)

//templates string
console.log(`sorted array ${sorted}`)
