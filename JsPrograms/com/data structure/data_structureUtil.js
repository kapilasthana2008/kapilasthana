/**
 * 
 * 
 * 
 * 
 */
var methods = {};
const input = require("../algorithms/utility")
var size = 0
let arr = []
let front = 0
let rear = 0

// Node class..
class Node{
    // constructor for initialize node data and next.
    constructor(data,next = null)
    {
        this.data = data 
        this.next = next       
    }
}
// linked List class
class LinkedList
{
    // creating a head initially null for tracking linklist.
    constructor()
    {
        // initialilly head is null
        this.head = null
    }
//======= inserting elements to the end. of linklist =============================================================
    insertEle(data)
    {
        // creating object of node class.
        let node = new Node(data)
        let current
        // checking head is null or not
        if(!this.head)
        {
            //if head is null asigning node to head
            this.head = node 
           
        }
        else{
            // otherwise updating current for inserting node into last.
            current = this.head 
            while(current.next)
            {
               
                current = current.next
            }
            current.next = node
            console.log("node inserted",current.data)

        }
    }
    //======= function for search element =============================================================
    searchEle(value)
    {
        // if list is empty then returning false
        if(this.head === null)
        {
            console.log("List is empty.")
            return false
        }
        else{
            // create a temp node and store head 
            let temp = this.head
            //while loop until temp is null.
            while(temp)
            {
                // comparing if temp.data is equal to element
                if(temp.data === value)
                {
                    return true
                }
                temp = temp.next;
            }
            // return false if data is not found
            return false
        }
    }
// removing element from list.
    removeEle(value)
    {
       // if list is empty
        if(this.head == null)
        {
            console.log("list is empty")
        }
        else{
            
            let temp = this.head
            let prevtemp = this.head
            // until data is found for delete node.
            while(temp.next)
            {
                prevtemp = temp;
                temp =temp.next;
               
                if(temp.data === value)
                {
                    prevtemp.next = temp.next
                }
            }
        }

    }
// read all node to creating array and return final array..
    getArray()
    {
        let current = this.head
        let array = []
        // until current null
        while(current)
        {
            // push every element of link list into array
            array.push(current.data)
            
            current = current.next
        }
        //returning final array.
return array
    }

//printing all nodes data.
    plrintEle()
    {
        let current = this.head
       
        while(current)
        {
            console.log(current.data)
            current = current.next
        }
    }
// function for sorting list data.
    sortList()
    {
        if(this.head == null)
        {
            console.log("list is empty")
        }
        else{
           
            let prevtemp = this.head
            let temp = this.head

            while(prevtemp)
            {
                temp = prevtemp.next

                while(temp)
                {
                    if(temp.data < prevtemp.data)
                    {
                    var swapVal = temp.data
                    temp.data = prevtemp.data
                    prevtemp.data = swapVal
                    }
                    temp = temp.next
                }
                prevtemp = prevtemp.next
            }
        }
    }

// enqueue people into the queue



}
  

// creating global obj of link list.
let link = new LinkedList()



 
// function expression for inserting element.
methods.insertElement = function(data)
{
  // calling function for inserting element.
    link.insertEle(data)
   
}
// function expression for print all elements.
methods.printElement = function()
{
 link.plrintEle()

}
// function expression for searching element
methods.searchElement = function(value)
{
    // if found returnig true.
 let bool = link.searchEle(value)
 
    return bool
}
// function expression for remove perticular element.
methods.removeElement = function(value)
{
 let bool = link.removeEle(value)
 // returning boolean 
    return bool
}
// function expression for convert linklist nodes into array.
methods.getArray = function()
{
  return link.getArray()
 
}

methods.arrayconvert = function(arr)
{
    let array = []

    for(let i = 0; i<arr.length;i++)
    {

        array.push(parseInt(arr[i]))
    }
    return array
}

//=================== sorting elements of link list ============================

methods.sortList = function()
{
    link.sortList()
}
//===================QUEUE======================================================
// enQueue  inserting element
methods.enQueue = function(size)
{
    //taking user input 
    console.log("enter users Names.")
    for(; rear<size;rear++)
    {
        loop:
        while(true)
        {
            let value =  input.data.input()

            if(isNaN(value))
            {
            arr[rear] = value
            break loop
            }
            else{
                console.log("insert again")
            }
        }
    }

    return arr
}

methods.deposit = function(user,amount)
{
    console.log("How much Money you want to deposit, Enter amount?",user)
    let amnt = parseInt(input.data.input())

    if(isNaN(amnt))
    {
        console.log("wrong input")
        return 0;
    }
    else{
        return amnt
    }
}

methods.withdraw = function(user,amount)
{
    console.log("How much Money you want to withdraw, Enter amount?",user)
    let amnt = parseInt(input.data.input())

    if(isNaN(amnt))
    {
        console.log("wrong input")
        return 0;
    }
    else{
        return amnt
    }
}

methods.Dequeue = function(user)
{
    if(front === rear)
    {
        console.log("queue is empty.")
    }
    else{
       
        front = front+1
       for(let i = front;i<rear;i++)
       {
           console.log(arr[i])
       }
    }
    

    return true
}

methods.arrayCreate = function(value)
{
    let arr = []
    let front = 0
    let rear = 0

    for(;rear<value.length;rear++)
    {
        arr[rear] = value.charAt(rear)
    //  arr.push(value.charAt(i))   
    }
    let obj= {
        front:front,
        rear:rear,
        arr:arr
    }
return obj
}

// exporting all methods.
exports.data = methods

// module.exports = link