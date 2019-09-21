var util = require("./utility")
//difining all notes.
const notes = [1, 2, 5, 10, 50, 100, 500,1000]

//taking input by user of amount
console.log(`enter amount for get change notes.`)
var amount = parseInt(util.data.input())
let total = 0;


// anonymous function.
const changeNotes = function(amount,notesArr,len)
{
    // if amount is equal to zero then return.
    if(amount === 0)
    {
        // printing no of notes..
        console.log(`total notes required ${total}`)
        return;
    }
    else{
        //if note is equal and less than the amount then count the notes.
            if(notesArr[len] <= amount)
            {
                // if note is equal and less than the amount then updating count number of notes.
                let count = Math.floor(amount/notesArr[len])   
                console.log(`${notesArr[len]}*${count} = ${notesArr[len]*count}`) 
                amount = amount%notesArr[len];
                total = total+count  
            }
    }
    changeNotes(amount,notes,--len)
}
 changeNotes(amount,notes,notes.length-1)