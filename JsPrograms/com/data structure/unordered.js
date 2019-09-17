
const fs = require("fs")
// reading file 
let file = fs.readFileSync("data.txt","utf8")
// storing into array after spliting.
let array = file.split(' ')

// class of Node

class Node{
    
    constructor(word,next = null)
    {
        this.value = word        
    }
}

//
class LinkedList
{

}