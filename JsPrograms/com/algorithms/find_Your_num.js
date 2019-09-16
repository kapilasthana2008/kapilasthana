//importing utility methods
const util = require("./utility")

//storing command line argument
let value = parseInt(process.argv[2])
//validate a number 

if(isNaN(value))
{
    console.log("it is not a number pls enter number only.")
}
else{
    let lower = 0;
 
    //calculating power.
    const num = Math.pow(2,value)
    console.log("Is it your number?"+(num-1))
    var checkBool = util.data.input()
   
    // if guess value is equal to num-1 then print.
    if(checkBool === "true")
    {
        console.log("your number is"+(num-1))
    } 
    else{
       // if value is less then search.
       console.log("your number is"+( util.data.binarySearch(lower,(num-1))))
      
    }


}