
/**
 * 
 * @author   : kapil asthana
 * Date      : 25/09/2019
 * program   : Extend the Prime Number Program and store only the numbers in that range that are 
 *             Anagrams. For e.g. 17 and 71 are both Prime and Anagrams in the 0 to 1000 range.
 *             Further store in a 2D Array the numbers that are Anagram and numbers
 *             that are not Anagram
 * 
 **/

// 1)- adding prime and anagram num into 2d array
// 2)- adding only prime number but not anagram in 2d array..
const util = require("./data_structureUtil.js")
const input = require("../algorithms/utility")

let prime_arr = [] 
let array_anagram = []
let prime_only = []
let Anacount = 0
let primeCount = 0

let prime_2d = util.data.Array_2D(11,10)
// finding prime numbers and storing into array.
for(let i = 1; i<=1000;i++)
{
    if(util.data.primeCheck(i))
    {
        prime_arr.push(i)
    }
}



try {
    for(let i = 0;i<prime_arr.length;i++)
    {
        let flag = 0
        for(let j = i+1;j<prime_arr.length;j++)
        {
            // if anagram function return true then add into link 
        if(util.data.isAnagram(prime_arr[i].toString(),prime_arr[j].toString()))
        {
                flag++
         }
    }
    
    if(flag > 0)
    {
        Anacount += 1
        array_anagram.push(prime_arr[i])
    }
    else{
        primeCount += 1
        prime_only.push(prime_arr[i])
    }
}
} catch (error) {
    console.log(error)
}

// console.log("prime and anagram ",array_anagram.join(","))
// console.log()
// console.log("size of anagrams ",Anacount)

// console.log("prime only",prime_only.join(","))
// console.log()
// console.log("size of primes ",primeCount)

// storing into 2D 
var anagram_arr = [];
var prime_2darr = [];
console.log()
console.log("prime and anagrams 2D array")
console.log("===========================")
while(array_anagram.length) 
 anagram_arr.push(array_anagram.splice(0,8))
console.log( anagram_arr.join("\n"))
console.log()
console.log()

console.log("only primes 2D array")
console.log("===========================")
while(prime_only.length) 
 prime_2darr.push(prime_only.splice(0,8))
console.log( prime_2darr.join("\n"))


