/**
 *  this is a named function 
 *  a named function is a standard and common way to define a function
 *  a named function can be hoisted(i.e it can be called before difinition declared.)
 *   
 */

 add(2,3)
function add(n,m)
{
    console.log(n+m)
}

/**
 *   function Expression : this is a called a anonymous function declared with a function exp.
 *  and this kind of function are not hoisted.
 * 
 *  A function Expression can be difined 3 ways.
 */
// 1st way.
 var fact = function(num) // this line is called function expression.
 {
     if(num == 1)
     {
         return 1
     }
     return num*fact(num-1)
 }

 console.log(`fact ${fact(5)}`)

 // 2nd way: named function with function expression.
 
 var sub = function subtract(n,m)
 {
    return (n-m)
 }
 console.log(`sub ${sub(5,3)}`)
/** 
 *  3rd Way: self invoking function
 *  this function called automatically by the javaScriptEngine only once.
 *  this called only once so obiously it can not be hoisted. 
*/

var result = (function multiply(num1,num2){
    return num1*num2;
})(10,2);

// var result = (function(num1,num2){
//     return num1*num2
// })(2,2)

// 

var simple = {

    add()
    {
    return this
    }
}

const arr = ["java","c++","c","python"]
const developer = "kapil asthana"

const arrfun = arr.map(function(arr){
    
    return {
        course: `${arr}`,
        developer : `${developer}`,
        year: `2018`
    }
})

console.log(arrfun)
exports
