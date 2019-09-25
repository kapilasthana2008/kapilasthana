
/**
 * 
 * @author   : kapil asthana
 * Date      : 21/09/2019
 * program   : Add the Prime Numbers that are 
 *             Anagram in the Range of 0 - 1000 in a Stack using the Linked List
 *             and Print the Anagrams in the Reverse Order. Note no Collection Library  
 *             can be used.
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
            // if anagram function return true then add into link list. 
        if(util.data.isAnagram(primeNum[i].toString(),primeNum[j].toString()))
        {
            // adding data into link list as a stack functionality.
            console.log("element.............",primeNum[i])
            util.data.insertFirst(primeNum[i])

        }
    }  
}
} catch (error) {
    console.log(error)
}
console.log("===========print data==============")
util.data.printElement()

