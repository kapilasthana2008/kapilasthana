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
let count = 0
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
        this.last = null
    }
//======= inserting elements to the end. of linklist =============================================================
   
// inserting into first 
    insertFirst(ele)
    {
       
        let node = new Node(ele)
        
        if(!this.head)
        {
            this.head = node 
            this.last = node
        }else{
            let temp = this.head

            node.next = temp
            this.head = node
        }

    }
    /**
     *  function for inserting element into last node of the list.
     *  
     * 
     */
    insertEle(data)
    {
        count += 1
        // creating object of node class.
        let node = new Node(data)
        let current
   
        // checking head is null or not
        if(this.head === null)
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
    /** 
     *  removeEle(value) function is the function which accepting arg
     *  then find it entire list if found then delete that node.
     * 
    */
// removing element from list.
    removeEle(value)
    {
        try {
            
            // if list is empty
        if(this.head == null)
        {
            console.log("list is empty")
        }
        else{
            // storing head into temp 
            let temp = this.head
            // taking previous temprary node
            let prevtemp = this.head
            // until data is found for delete node.
            while(temp.next)
            {
                // traverseing of previous node  upto last temp-1.
                prevtemp = temp;
                // traversing node upto last node.
                temp =temp.next;
               // if data found in any node then deleting that node.
                if(temp.data === value)
                {
                    prevtemp.next = temp.next
                }
            }
        }

        } catch (error) {
            console.log(error)
        }
    }

    removeSingleEle(ele){
       
        
        if(count === 1)
        {
            this.head = null
            count = 0
        }else{
           // console.log("not removed")
        }
        
    }
    /** 
     *  isEmpty() function is the function which returns list status
     *  if list is empty true otherwise it will return false.
     * 
    */

    isEmpty()
    {
        if(this.head === null)
        {
            return true
        }
        else{
            return false
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

    /**
     *   plrintEle() function is a function that print entire list data.
     * 
     */

//printing all nodes data.
    plrintEle()
    {
        let current = this.head
     
        if (this.head === null)
        {
            console.log("list empty")
        }
        else{
            while(current)
            {
               
                console.log(current.data)
                current = current.next
            }
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



 methods.insertFirst = function(data)
{
  // calling function for inserting element.
    link.insertFirst(data)
   
}
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
// methods. reversePrint = function()
// {
//     link. reversePrint()
// }
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
methods.removeSingleEle = function(value)
{
    let bool = link.removeSingleEle(value)
    return bool
}
methods.isEmpty = function()
{
    let bool = link.isEmpty()
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
/**
 * 
 * 
 */

methods.monthCheck = function(month)
{
    const months31 = ["Jan","March","May","July","Aug","Oct","Dec"]

    for(let i = 0; i<months31.length;i++)
    {
        if(months31[i] === month)
        {
            return true
        }
    }
    return false
}

methods.primeCheck =function(n)
{
    if (n===1)
    {
     return false;
    }
    else if(n === 2)
    {
      return true;
    }else
    {
      for(var x = 2; x < n; x++)
     {
        if(n % x === 0)
        {
          return false;
        }
     }
    return true;  
  }

}
methods.BubbleSortStr = function(str)
{
    try {
        if(typeof str == "string")
        {
            var s = str.split("");
            var temp;

            for(let i=0;i<s.length;i++)
            {
                for(let j=i+1;j<s.length;j++)
                {
                    if(s[i]>s[j])
                    {
                        temp = s[i];
                        s[i] = s[j];
                        s[j] = temp;
                    }
                }
            }
            return s.join("");
        }
        throw "Enter valid Input"; 
    } catch (error) {
        return error;
    }
}
methods.isAnagram = function(str1,str2)
{
    try {
        if(str1!=null&&str2!=null)
        {
            var sort1 = this.BubbleSortStr(str1);
            var sort2 = this.BubbleSortStr(str2);
            return (sort1===sort2);
        }
        throw "Enter valid Input";
    } catch (error) {
        return error;
    }
 
    
      
}

methods.Array_2D = function(row,col)
{
    try {
        if(!isNaN(row)&&!isNaN(col))
        {
            var Arr = new Array(row);
            for(let i=0;i<row;i++)
            {
                Arr[i] = new Array(col);
            }
            return Arr;
        }
    } catch (error) {
        return error;
    } 

}
/** 
 * 
 * Method factorial is used for find factorial.
 * receives an argument number type.
 * calculating then returning result.
 * formula : -  5*4*3*2*1 = 120;
*/
methods.factorial = function(num)
{
    if(num === 1 || num === 0)
    {
        return 1
    }
    else{
        return num*(methods.factorial(num-1))
    }
}
/** 
 * 
 * Method catlanNum is used for find number of binary search tree.
 * receives an argument number type.
 * calculating then returning result.
 * formula : -  (2n)! / ((n + 1)! * n!)
*/
methods.catlan = function(num)
{
    try {
        return (methods.factorial(2*num))/(methods.factorial(num+1)*methods.factorial(num))
    } 
    catch (error) {
        console.log(error)
    }
  
}
// exporting all methods.
exports.data = methods

// module.exports = link