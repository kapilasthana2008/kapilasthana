//importing module exports all function declared in utility.js file
const input = require("./utility");
console.log("enter number to find factor");
/*calling input function declared in module object in utility.js
* taking input num.
*/
var num = input.one();

console.log("factors\n");
factor(num);

// function to check  prime factor
function factor(num)
{
   var temp = num; // temp var
   
   // loop upto number
    for (var i = 2; i <= num;i++)
    {
        if(temp%i == 0)
        {
            temp = temp/i;
            //if num devide with any number that number will pass to check that is prime or not
            if(isPrime(i)) // if true then prime
            {
                console.log(i); // print prime number
            }
        }
    }
}

//function to check factor.
function isPrime(value)
{
    // if value is equal to 1 and 2 the return true.   
    if(value ==1 || value == 2)
    {
        return true;
    }
    //iteterate loop to calculate 
    for (var i = 2; i < value; i++)
    {
        // if value divided with any number then return false.
        if (value%i == 0) {
            return false;
        }
    } 
    return true;
}