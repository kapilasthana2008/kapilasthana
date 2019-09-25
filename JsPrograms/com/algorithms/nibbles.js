const util = require("./utility")
console.log("enter number to find nibbles")
let num =parseInt( util.data.input())

//function to get binary digit
function findBin(deci)
{
    var arr = new Array(8)  

        var bin = deci.toString(2)
       
        console.log(`array length is ${arr.length} binary is ${bin}`)
        for(let i = 0;i< bin.length;i++)
        {
            arr[i] = parseInt(bin[i]);
            
        }
        return arr
}