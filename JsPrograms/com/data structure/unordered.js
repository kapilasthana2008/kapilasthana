/**
 * 
 * 
 * 
 * 
 */
//importing utility function for linklist.
const util = require("./data_structureUtil.js")
const input = require("../algorithms/utility")
// imporing all function requires for file.
const fs = require("fs")

// reading file 
let file = fs.readFileSync("data.txt","utf8")
// storing into array after spliting.
let array = file.split(',')

// inserting elements into perticular node.
for(let i = 0;i < array.length;i++)
{ 
    util.data.insertElement(array[i])
}
// printing perticular node data
util.data.printElement()

// input for search word.
    console.log("enter word for search word.")
    let ele = input.data.input()  
    var del = false

//================================================================

if(util.data.searchElement(ele))
{
    util.data.removeElement(ele)
        // let array = util.data.getArray().join(" ")     
}
else{
    console.log("Not found")
     util.data.insertElement(ele)
   util.data.printElement()
}
var StringData = util.data.getArray()
fs.writeFile("data.txt",StringData,err=>{
    if(err)
    throw err
    
})