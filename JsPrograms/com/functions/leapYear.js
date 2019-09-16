//importing module exports all function declared in utility.js file
const input = require("./utility");
console.log("enter year");
/*calling input function declared in module object in utility.js
* taking input year.
*/
var year = input.one();
checkyear(year);

// passing year to function to check year is leap or not.
function checkyear(year)
{
    // checking year digit is greater 3
    if(year <1000 ||year >10000)
    {
        console.log("invalid year");
    }
    else{
        //checking year is leap or not if condition true then leap year else not.
        if(year%4 == 0 && year%100 != 0||year%400 == 0)
        {
            console.log(year+"leap year");
        }
        else{
            console.log(year+" is not a leap year");
        }

    }
}

