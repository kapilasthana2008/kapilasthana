// importing utility methods.
const util = require("./utility")
// storing default sign like X and O
var sign = ''
//storing column number..
var columnNum = 0
console.log(`tic tac toe game v1.2.0`)
// define a static 2D array.
var Arr = [[1,2,3],[4,5,6],[7,8,9]];
// joining all elements in 2D matrix form to display.
console.log(Arr.join('\n'))

console.log(`Let's Play!...`)

//=======================play function=========================
function play()
{
    // taking input by user to place X or O
    console.log(`please enter column number.`)
    // casting user input to number...
    columnNum = parseInt(util.input())
   // if user input 1 then column 1 will be active
    if(columnNum == 1)
    {
        // validating column is empty or filled...
        if(validCheck(columnNum))
        {
            // if empty the place the sign X or O.
         Arr[0][0] = sign
        console.log(Arr.join('\n'))
        }
    }
     // if user input 2 then column 2 will be active
    else if(columnNum == 2)
    {
        // validating column is empty or filled...
        if(validCheck(columnNum))
        {
             // if empty the place the sign X or O.
         Arr[0][1] = sign
        console.log(Arr.join('\n'))
        }
    }
         // if user input 3 then column 3 will be active...........inuput N == 9
    else if(columnNum == 3)
    {
        if(validCheck(columnNum))
        {
            // if empty the place the sign X or O.
         Arr[0][2] = sign
        console.log(Arr.join('\n'))
        }
    }
    else if(columnNum == 4)
    {
        if(validCheck(columnNum))
        {
         Arr[1][0] = sign
        console.log(Arr.join('\n'))
        }
    }
    else if(columnNum == 5)
    {
        if(validCheck(columnNum))
        {
         Arr[1][1] = sign
        console.log(Arr.join('\n'))
        }
    }
    else if(columnNum == 6)
    {
        if(validCheck(columnNum))
        {
         Arr[1][2] = sign
        console.log(Arr.join('\n'))
        }
    }
    else if(columnNum == 7)
    {
        if(validCheck(columnNum))
        {
         Arr[2][0] = sign
        console.log(Arr.join('\n'))
        }
    }
    else if(columnNum == 8)
    {
        if(validCheck(columnNum))
        {
         Arr[2][1] = sign
        console.log(Arr.join('\n'))
        }
        
    }
     if(columnNum == 9)
    {
        if(validCheck(columnNum))
        {
            
            Arr[2][2] = sign
            console.log(Arr.join('\n'))
        }
    }
}

//=========================   funcction for filing==============
function validCheck(columnNum)
{
    // validating every column... columnNUm == 9.
    if(columnNum == 9)
    {
        // if column have X or O then return false.
        if(Arr[2][2] === 'X' || Arr[2][2] === 'O')
        {
            // printing disp column is not empty..
            console.log(`field already Filled`)
            return false
        }else{
            // return true if column is empty..
            return true
        }

    }
    else if(columnNum == 8){

        if(Arr[2][1] === 'X' || Arr[2][1] === 'O')
        {
            console.log(`field already Filled`)
            return false
        }else{
            return true
        }
    }

    else if(columnNum == 7){

        if(Arr[2][0] === 'X' || Arr[2][0] === 'O')
        {
            console.log(`field already Filled`)
            return false
        }else{
            return true
        }
    }

    else if(columnNum == 6){

        if(Arr[1][2] === 'X' || Arr[1][2] === 'O')
        {
            console.log(`field already Filled`)
            return false
        }else{
            return true
        }
    }

    else if(columnNum == 5){

        if(Arr[1][1] === 'X' || Arr[1][1] === 'O')
        {
            console.log(`field already Filled`)
            return false
        }else{
            return true
        }
    }

    else if(columnNum == 4){

        if(Arr[1][0] === 'X' || Arr[1][0] === 'O')
        {
            console.log(`field already Filled`)
            return false
        }else{
            return true
        }
    }
    else if(columnNum == 3){

        if(Arr[0][2] === 'X' || Arr[0][2] === 'O')
        {
            console.log(`field already Filled`)
            return false
        }else{
            return true
        }
    }
    else if(columnNum == 2){

        if(Arr[0][1] === 'X' || Arr[0][1] === 'O')
        {
            console.log(`field already Filled`)
            return false
        }else{
            return true
        }
    }
    
    else if(columnNum == 1){

        if(Arr[0][0] === 'X' || Arr[0][0] === 'O')
        {
            console.log(`field already Filled`)
            return false
        }else{
            return true
        }
    }
}
/**
 * changing player function.
 * along with sign X to O and O to X
 *  */
function changePlayer()
{
    if(sign === '')
    {
       
        sign = 'X'
    }
    else if(sign === 'X')
    {
        sign = 'O'
    }
    else{
     
        sign = 'X'
    }
}

//=================function chech Winning state=======================
/** 
 * function for checking every pattern for winning state.
 * */ 
function wins()
{
    if((Arr[0][0] === 'X' && Arr[0][1] === 'X' && Arr[0][2] === 'X') || (Arr[0][0] === 'O' && Arr[0][1] === 'O' && Arr[0][2] === 'O'))
    {
        console.log("you Win............!!!!!!!!!!!!!!"+sign)
        return true
    }
    else if((Arr[1][0] === 'X' && Arr[1][1] === 'X' && Arr[1][2] === 'X') || (Arr[1][0] === 'O' && Arr[1][1] === 'O' && Arr[1][2] === 'O'))
    {
        console.log("you Win............!!!!!!!!!!!!!!"+sign)
        return true
    }
    else if((Arr[2][0] === 'X' && Arr[2][1] === 'X' && Arr[2][2] === 'X') || (Arr[2][0] === 'O' && Arr[2][1] === 'O' && Arr[2][2] === 'O'))
    {
        console.log("you Win............!!!!!!!!!!!!!!"+sign)
        return true
    }
    //====================
    if((Arr[0][0] === 'X' && Arr[1][0] === 'X' && Arr[2][0] === 'X') || (Arr[0][0] === 'O' && Arr[1][0] === 'O' && Arr[2][0] === 'O'))
    {
        console.log("you Win............!!!!!!!!!!!!!!"+sign)
        return true
    }
    else if((Arr[0][1] === 'X' && Arr[1][1] === 'X' && Arr[2][1] === 'X') || (Arr[0][1] === 'O' && Arr[1][1] === 'O' && Arr[2][1] === 'O'))
    {
        console.log("you Win............!!!!!!!!!!!!!!"+sign)
        return true
    }
    else if((Arr[0][2] === 'X' && Arr[1][2] === 'X' && Arr[2][2] === 'X') || (Arr[0][2] === 'O' && Arr[1][2] === 'O' && Arr[2][2] === 'O'))
    {
        console.log("you Win............!!!!!!!!!!!!!!"+sign)
        return true
    }
    else if((Arr[0][0] === 'X' && Arr[1][1] === 'X' && Arr[2][2] === 'X') || (Arr[0][0] === 'O' && Arr[1][1] === 'O' && Arr[2][2] === 'O'))
    {
        console.log("you Win............!!!!!!!!!!!!!!"+sign)
        return true
    }
    else if((Arr[0][2] === 'X' && Arr[1][1] === 'X' && Arr[2][0] === 'X') || (Arr[0][2] === 'O' && Arr[1][1] === 'O' && Arr[2][0] === 'O'))
    {
        console.log("you Win............!!!!!!!!!!!!!!"+sign)
        return true
    }
    else{
       return false
    }
}

while(true)
{
    changePlayer()
    play()
   // if wins function return true loop break.
    if(wins())
   {
       break
   }     
}