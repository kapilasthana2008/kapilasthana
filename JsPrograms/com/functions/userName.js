//importing module exports all function declared in utility.js file
const input = require("./utility");
const util = require("../algorithms/utility")
console.log("enter the name");
//calling input function declared in module object in utility.js
var name = input.one();

console.log( "Hello "+name+",How are you?");
console.log("enter another name to replave;");

/*calling input function declared in module object in utility.js
* taking input name again for replacing exist name.
*/
var replace = input.one();
//checking replcing name input characters is maximum 3 
if(replace.length>3)
{
    name = replace;
    console.log( "Hello "+name+",How are you?");
}else{
    //if character are less than 3
    console.log( "Name characters should be three or more.");
}