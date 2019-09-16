// 
const util = require("./utility")

console.log("enter decimal to find binary number.")
var deci = parseInt(util.data.input())
var total = 0;
var arr = findBin(deci)
   
if(arr !== undefined)
{

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


function findBin(deci)
{
    var arr = []
   
    if(isNaN(deci))
    {
        console.log("your entered decimal is may be greater 128 or may not a number.")
        return
    }
    else{
        var bin = deci.toString(2)
        console.log(`binary is ${bin}`)
    
        for(let i = bin.length-1;i>=0;i--)
        {
            arr.push(parseInt(bin[i]))
        }
        return arr
    }

}
