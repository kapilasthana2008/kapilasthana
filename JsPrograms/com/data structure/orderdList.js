//importing utility function for linklist.
const util = require("./data_structureUtil.js")
const input = require("../algorithms/utility")
// imporing all function requires for file.
const fs = require("fs")
let file
// reading file
try {
    file = fs.readFileSync("file/numberData.txt","utf8")
 
} catch (error) {
    // throwing error if file not found.
    console.log(error)
}
// spliting file content into array form.
let array = util.data.arrayconvert(file.split(","))
//inserting into nodes all elements.
for(let i = 0;i < array.length;i++)
{ 
    util.data.insertElement(array[i])
}
// printing all sorted nodes data..
console.log("===================sorted=====================")
//sorting linkList element
util.data.sortList()
util.data.printElement()
// taking user input for search element.
console.log("enter number for search.")
let num = parseInt(input.data.input())

if(util.data.searchElement(num))
{
    // if element found then remove that element from list.
    util.data.removeElement(num)
    util.data.printElement()
}
else{
    // if element not found then add element into list.
    util.data.insertElement(num)
    util.data.sortList()
    util.data.printElement()
}
// getting data into String obj form.
var StringData = util.data.getArray()
// finally writing data into file.
fs.writeFile("file/numberData.txt",StringData,err=>{
    if(err)
    throw err
    
})