//importing utility function for linklist.
const util = require("./data_structureUtil.js")
const input = require("../algorithms/utility")
let obj = null
// taking input string by user
console.log("give String")
let value = input.data.input()
//
if(typeof value === 'string' || value instanceof String)
{

    try {   
        let str1 = ""
        let str2 = ""

      obj = util.data.arrayCreate(value) 
       
      for(let i= obj.front,j=obj.rear-1;(i<obj.arr.length)&&(j>=0);i++,j--)
      {
         str1 += value.charAt(i)
         str2 += value.charAt(j)
        
      }
     
      if(str1 === str2)
      {
          console.log("palindrom")
      }
      else{
          console.log("not palindrom")
      }
      
     } catch (error) {
            console.log(error)    
        }

}
else{
    console.log("wrong input")
}
    


