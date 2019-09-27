
/**
 * 
 * @author   : kapil asthana
 * Date      : 25/09/2019
 * program   : Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. 
 *             Store the prime numbers in a 2D Array, the first dimension represents 
 *             the range 0-100,100-200, and so on.While the second dimension represents
 *             the prime numbers in that range.
 * 
 **/

//importing utility function for linklist.
const util = require("./data_structureUtil.js")
const input = require("../algorithms/utility")
const functions = require("../functions/utility")

var arr = util.data.Array_2D(10,25)

let rownum = 0
let colnum = 0
let range = 100

// storing prime numbers into 2d array. 
for(let i=2;i<=1000;i++)
{
    if(util.data.primeCheck(i) && i<=range)
    {
        arr[rownum][colnum] = i;
        colnum++;
    }
    if(i>range)
    {
        range += 100;
        colnum = 0;
        rownum++;
    }
}

// printing array

for(let i = 0;  i<10;i++)
{
    for(let j = 0;j<25;j++)
    {
        if(arr[i][j] != undefined)
            process.stdout.write(arr[i][j]+" ");
        else
            process.stdout.write("");
    }
    console.log("");
}
