//importing module exports all function declared in utility.js file
const input = require("./utility");
console.log("enter year");
/*calling input function declared in module object in utility.js
* taking input year.
*/
var year = input.one();

if (input.leap_year(year))
{
    console.log("leap year")
}
else{
    console.log("Not leap year")
}

// passing year to function to check year is leap or not.


