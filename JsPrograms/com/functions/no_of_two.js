//importing module exports all function declared in utility.js file
const input = require("./utility");

console.log("enter number");
/*calling input function declared in module object in utility.js
* taking input num.
*/
var num = input.one();
var table = 1;
console.log("table");
//iterate number upto num
for (var i = 1; i <= num; i++) 
{   
    table *=2;
    console.log(table);
}

