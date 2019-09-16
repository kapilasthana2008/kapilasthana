//importing utility methods 
var util = require("./utility")
var fs = require("fs")
//reading file
var read = fs.readFileSync('readMe.txt','utf8')
// spliting words storing into array.
var arr = read.split(',');
console.log(arr)
var temp = Array.from(arr);
//sorting array in ascending order...
var sorted = util.data.sort(temp)
console.log("\n\nsorted\n "+sorted)
// taking input for search word into array.
console.log("enter word for search in file.")
var ele = util.data.input();

//binary search function.
let binarySearch = function (sorted, ele, low, high)
{
     // calculating midpoint of array.
    var mid =  Math.floor((low+high)/2) ;
      //iterating until find word
    while(low <= high)
    {
        // if word present at mid then returning true      
        if (sorted[mid] === ele) 
        {
            console.log("location"+mid)
            return true
         }
       // if word  is lower from  mid then returning function to search in half lower part 	
        else if (sorted[mid]> ele)
        {
            return binarySearch(sorted, ele, low, mid-1);
         }
         else
         {
       // if word  is greater from  mid then returning function to search in half higher part
            return binarySearch(sorted, ele, mid+1, high)

         }  
   }
   return false;     
}

if ((binarySearch(sorted, ele, 0, arr.length-1))) 
console.log("Element found! "+ele); 
else 
console.log("Element not found! "+ele);



