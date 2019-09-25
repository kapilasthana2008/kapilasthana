
/**
 * 
 * @author   : kapil asthana
 * Date      : 21/09/2019
 * program   : Add the Prime Numbers that are Anagram in the Range of 0 - 1000
 *             in a Queue using the Linked List and Print the Anagrams from the Queue.
 *             Note no Collection Library can be used.
 * 
 **/

//importing utility function for linklist.
const util = require("./data_structureUtil.js")
const input = require("../algorithms/utility")

var primeNum = []
// adding all prime numbers into array.
for(let i = 1; i<= 1000;i++)
{
    // checking prime numbers
    if(util.data.primeCheck(i))
    {
        // storing prime number into array.
        primeNum.push(i)
    }
}

// loop for checking anagram all prime numbers..
try {
    for(let i = 0;i<primeNum.length;i++)
    {
        for(let j = i+1;j<primeNum.length;j++)
        {
            // if anagram function return true then add into link 
        if(util.data.isAnagram(primeNum[i].toString(),primeNum[j].toString()))
        {
            util.data.insertElement(primeNum[i])
        }
    }  
}
} catch (error) {
    console.log(error)
}

// printing nodes
util.data.printElement()



