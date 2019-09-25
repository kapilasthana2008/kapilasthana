
/**
 * 
 * @author   : kapil asthana
 * Date      : 21/09/2019
 * program   : Number of Binary Search tree.
 * 
 **/


//importing utility function for linklist.
const util = require("./data_structureUtil.js")
const input = require("../algorithms/utility")

// taking input by user
console.log("enter number for find posibilities of BST.")
let num = parseInt(input.data.input()) 


try {
    
    if(typeof num === "number")
    {
        var result = 0
          
          if(!isNaN(num))
          {
            result = util.data.catlan(num)
         
          }
    }
} catch (error) {
    
    console.log(error)
}


//Count of BST
console.log("Count of BST with ",num," nodes is ",util.data.catlan(num))
// Count of binary trees 
console.log("Count of binary tree with ",num," nodes is ",util.data.catlan(num)* util.data.factorial(num))
