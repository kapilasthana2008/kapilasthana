/**
 * finding the root of quadratic eq. (ax^2 +bx^2+ c) == 0
 * formula - (-b) +sqrt(b^2 - 4ac)/2a.
 * 
 * 
 */
    var util = require("../algorithms/utility")
    console.log("enter the parameters to find roots.")
    console.log("enter the value to for a.")
 var a = parseInt(util.data.input())
 console.log("enter the value to for b.")
 var b = parseInt(util.data.input())
 console.log("enter the value to for c.")
 var c = parseInt(util.data.input())
 console.log("parameters are "+typeof(a)+" , "+typeof(b)+" & "+typeof(c))
 
 var delta = (b*b -4*a*c)

 var root1 = ((-b)+Math.sqrt(delta))/2*a;
 var root2 = ((-b)-Math.sqrt(delta))/2*a;

console.log((((-b)+Math.sqrt(delta))/2*a))
  console.log("roots are ("+root1+","+root2+")");