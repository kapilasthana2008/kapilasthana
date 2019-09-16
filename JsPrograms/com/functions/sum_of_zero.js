//adding utility file from algorithm

var util = require("../algorithms/utility")
//input size for array
console.log("enter size.")
var size = util.data.input();
//getting array with entered size.
var array = util.data.inputarray(size);
console.log("triplets are:")

// findind triplets keep var i to 0th position of array
for(var i=0; i<array.length;i++)
{
    //  keep var j for (i+1)th to position of array
   for(var j = i+1;j<array.length;j++)
   {
       //  keep var k for (j+1)th to position of array
       for(var k = j+1; k<array.length;k++)
       {
           // add all 3 elements of array and comparing with 0
            if((array[i]+array[j]+array[k])=== 0)
            {
                //if condition true then printing triplets.
                console.log("triplet ("+array[i]+","+array[j]+","+array[k]+")")
            }
       }
   }
}