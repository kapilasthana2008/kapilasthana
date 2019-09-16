var util = require("./utility")



let binarySearch = function (arr, ele, low, high)
{
     
    var mid =  Math.floor((low+high)/2) ;
      
    while(low <= high)
    {
              
        if (arr[mid] === ele) 
        {
            return true
         }	
        else if (arr[mid]> ele)
        {
            return binarySearch(arr, ele, low, mid-1);
         }
         else
         {
            return binarySearch(arr, ele, mid+1, high)
         }
   }     
		

}

var arr = util.data.inputarray(5)

console.log("enter element to search")
var ele = parseInt(util.data.input())
    if ((binarySearch(arr, ele, 0, arr.length-1))) 
    console.log("Element found!"); 
    else 
    console.log("Element not found!");


 