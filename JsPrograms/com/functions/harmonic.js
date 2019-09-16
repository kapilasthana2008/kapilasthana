//importing module exports all function declared in utility.js file
const input = require("./utility");
console.log("enter number to find harmonic number");

/*calling input function declared in module object in utility.js
* taking input num.
*/
var num = input.one();

// declare a variable to store final harmonic number.
var harmonic = 0.0;
// checking input is a number or not.
if(isNaN(num))
{
    console.log("not a number");
}
else{
   
    //if input is number then iterate upto num to find harmonic
    for (var i = 1; i <=num; i++) {
        harmonic += (1/i);
    }
}
//print final harmonic number
console.log(harmonic);
