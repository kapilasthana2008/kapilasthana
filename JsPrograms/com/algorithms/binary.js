//importing module exports all function declared in utility.js file
const util = require("./utility")
//taking input by user a number to find binary
console.log("enter decimal to find binary number.")
// given input parsing into number
var deci = parseInt(util.data.input())
var total = 0;
// passing number to findBin function to get binary.
var arr = findBin(deci)
// validate returned array is not undefined.
if(arr !== undefined)
{
// printing in form of .......32 16 8 4 2 1 
    for(let i =0;i<arr.length;i++)
    {  
        if(arr[i] === 1)
        {
            console.log(`power 2*${i} = ${Math.pow(2,i)}`)
            total = total+Math.pow(2,i)
        }
    }
    console.log(`=================\n\ttotal ${total}`)
}

// function to find binary of a number.
function findBin(deci)
{
    var arr = []
   // validating passed argument is a number.
    if(isNaN(deci))
    {
        console.log("your entered decimal is may be greater 128 or may not a number.")
        return
    }
    else{
        // getting a string of binary.
        var bin = deci.toString(2)
        console.log(`binary is ${bin}`)
        //converting binry to number and storing into array 
        for(let i = bin.length-1;i>=0;i--)
        {
            arr.push(parseInt(bin[i]))
        }
        // return binary array.
        return arr
    }

}
