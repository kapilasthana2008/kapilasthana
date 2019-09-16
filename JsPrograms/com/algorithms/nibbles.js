const util = require("./utility")
console.log("enter number to find nibbles")
let num =parseInt( util.data.input())


if(isNaN(num)|| num > 128)
{
    console.log("It may not a number or may be exceed from 128.")
}
else{
    var arr = findBin(num)
}


//function to get binary digit
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
            console.log(bin[i])
            arr.push(parseInt(bin[i]))
        }
        return arr
    }
}