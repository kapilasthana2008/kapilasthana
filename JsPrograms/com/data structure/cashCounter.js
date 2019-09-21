
/**
 * 
 * @author   : kapil asthana
 * Date      : 21/09/2019
 * program   : Simulate Banking Cash Counter
 * 
 **/


//importing utility function for linklist.
const util = require("./data_structureUtil.js")
const input = require("../algorithms/utility")
// initial amount in Bank
let amount = 150000
// inserting users into queue.
let arr = util.data.enQueue(3)

// printing queue..
console.log("================")
console.log("peoples in Queue",arr)

//user are going to bank one by one.
for(let i = 0;i<arr.length;i++)
{
    let user = arr[i]
    // taking input regards choice of user
    console.log("press 1 for deposit Cash or 0 for withdraw, what do you want?",user)
    let choice = parseInt(input.data.input())
    
    // if choice is not 1 or 0 then disp wrong message.
    if(choice>1 || choice <0)
        console.log("wrong choice")
    
    // if choice 1 then deposit.
    else if(choice == 1)
    {
        let add = util.data.deposit(user,amount) 
        //adding deposit amount.  
        amount += add 
        // after deposit money user will left window of bank (i.e Dequeue)
        if(util.data.Dequeue(user))
         {
            console.log("user task completed ",user)
         }  

    }
    else
    {
        // if choice is 0 then withdraw.
       let wid =  util.data.withdraw(user,amount)
       //if wid is greater than amount in bank then disp error message.
       if (wid>amount)
       {
           console.log("insuffeciant Balance.")
       }
       else{
        // amount deducted from bank.
        amount -= wid
       }
       if(util.data.Dequeue(user))
       {
       console.log("user task completed ",user)
       }
    }
    
}
// displaying final amount left into bank
console.log("money left into Bank",amount)