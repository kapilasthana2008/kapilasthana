
const util = require("../functions/temp")
const fs = require("fs")
// reading file 
let file = fs.readFileSync("data.txt","utf8")
// storing into array after spliting.
let array = file.split(' ')

// class of Node

class Node{
    
    constructor(data)
    {
        this.data = data 
        this.next = null       
    }
}

//
class LinkedList
{

}