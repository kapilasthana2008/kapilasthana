//importing module exports all function declared in utility.js file
var util = require("./utility")

// a function expression declared and passed args arr ,element,low and high location..
let binarySearch = function (arr, ele, low, high)
{
     // finding mid postion of arr
    var mid =  Math.floor((low+high)/2) ;
      // looping until low == to high
    while(low <= high)
    {
         // if element is present on mid position then element return .
        if (arr[mid] === ele) 
        {
            return true
         }
         //if element is less than or greater the mid position element then updating the mid	
        else if (arr[mid]> ele)
        {
           // passing args with updating mid.
            return binarySearch(arr, ele, low, mid-1);
         }
         else
         {
            // passing args with updating mid.
            return binarySearch(arr, ele, mid+1, high)
         }
   }     
		

}
// taking input array by user.
var arr = util.data.inputarray(5)
// enter element to find element
console.log("enter element to search")
var ele = parseInt(util.data.input())
// passing element into function.
    if ((binarySearch(arr, ele, 0, arr.length-1))) 
    // if found then print element found
    console.log("Element found!",ele); 
    else 
    console.log("Element not found!",ele);


 