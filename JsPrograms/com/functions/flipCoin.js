
//declare two variable to store flip probability.
var heads = 0.0;
var tails = 0.0;

//importing module exports all function declared in utility.js file
const input = require("./utility");
console.log("enter the number to flip.");

/*calling input function declared in module object in utility.js
* taking input num.
*/
var num = input.one();

//iterate flip upto num
for (var i= 1; i<= num; i++) {
    
    //checking probability between 0 and 1.
    if(Math.random()<0.5)
    {
        // if value is less 0.5 then tails+1
        tails +=1;
    }
    else{
        // if value is less 0.5 then tails-1
        heads +=1;
    }   
}
//percentage of head prob. and tails prob.
console.log("tails "+((tails/num)*100)+" heads "+((heads/num)*100));

