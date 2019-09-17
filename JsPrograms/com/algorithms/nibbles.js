const util = require("./utility")
console.log("enter number to find nibbles")
let num =parseInt( util.data.input())


if(isNaN(num)|| num > 128)
{
    console.log("It may be not a number or may be exceeded from 128.")
}
else{
    var arr = findBin(num);
   
}

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