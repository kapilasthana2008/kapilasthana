//utility methods importing.
const util = require("./utility")
const board = [[1,2,3],[4,5,6],[7,8,9]]
let first = false

const user = 'X'
const computer = 'O'
//asking to user to play or not.
function intro()
{
    
    console.log("Welcome to Tic-Tac-Toe");
    console.log("To play this game against the computer,");
 
    console.log("");
    console.log("Would you like to go first? Y/N");
    // input by user to Yes or No..
    var goFirst = util.input();

    switch (goFirst) {
        case 'y':
                 first = true 
                 initializeBoard();
            break;
            case 'Y':
            first = true 
            initializeBoard();
       break;
        case 'n':
           
            initializeBoard();
       break;
       case 'N':
         
            initializeBoard();
       break;
        default: console.log("wrong choice..")
                intro()
            break;
    }   
}

function initializeBoard()
{
    for(let i = 0;i<3;i++)
    {
      
        for(let j = 0;j<3;j++)
        {
            
            board[i][j] = ' '
        }
    }
    
    getBoard();
}
function getBoard(){

    
    var line = "  =============";
    console.log("    1   2   3");
    console.log(line);
    console.log("1   " + board[0][0] + " | " + board[0][1] + " | " + board[0][2]);
    console.log(line);
    console.log("2   " + board[1][0] + " | " + board[1][1] + " | " + board[1][2]);
    console.log(line);
    console.log("3   " + board[2][0] + " | " + board[2][1] + " | " + board[2][2]);
    console.log(line);
    console.log("");
    
}

function start()
{
    if(first)
    {
        usertTurn();
    }
    else{
        computerTurn();
    }
}

function usertTurn()
{
    console.log("enter the  row & column number like 1,2\n enter row ")
    const row = parseInt(util.input())-1
    console.log("enter column")
    const col = parseInt(util.input())-1

    loop:
    while(true)
    {
        if(isValid((row),(col)))
         {
        board[row][col] = user
        first = false
         break loop;   
        }
        else{
            console.log("enter again column already filled..\n")
            usertTurn()
        }
    }
    
  
   
}

function isValid(row,col)
{

    if(first)
    {
        if(board[row][col] === ' ')
        {
            return true
        }
        else{

            return false
        }
    }
    else{

        if(row,col)
        {
            if(board[row][col] === ' ')
            {
                return true
            }
            else{
    
                return false
            } 
        }
    }
    
}

function computerTurn()
{
    let row,col
    console.log("now its my turn.")
    // const min = 1
    // const max = 9
    
    let column = (Math.floor(Math.random() *10))
   console.log(`column num ${column},,,,,,,,,,,,,,,,,,,`)
    if (column <=8)
    { 
        if(column === 0)
        {
            row = 0
            col = 0
            console.log(` row ${row} and column ${col} `)
        }
        else if(column === 1)
        {
            row = 0
            col = 1
            console.log(` row ${row} and column ${col} `)
        }
        else if(column === 2)
        {
            row = 0
            col = 2
            console.log(`row and col ${row, col} `)
        }
        else if(column === 3)
        {
            row = 1
            col = 0
            console.log(` row ${row} and column ${col} `)
        }
        else if(column === 4)
        {
            row = 1
            col = 1
            console.log(` row ${row} and column ${col} `)
        }
        else if(column === 5)
        {
            row = 1
            col = 2
            console.log(` row ${row} and column ${col} `)
        }
        else if(column === 6)
        {
            row = 2
            col = 0
            console.log(` row ${row} and column ${col} `)
        }
        else if(column === 7)
        {
            row = 2
            col = 1
            console.log(` row ${row} and column ${col} `)
        }
        else if(column === 8)
        {
            row = 2
            col = 2
            console.log(` row ${row} and column ${col} `)
        }
        while(true)
        {
            if(isValid(row,col))
            {
             board[row][col] = computer
             first = true
            break;   
           }
           else{ 
               console.log("else part........")
            computerTurn()
         }
    }
 }
   return
}

function wins()
{
   
    if((board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X')||
    (board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X')||
    (board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X')||
    (board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X')||
    (board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X')||
    (board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X')||
    (board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X')||
    (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X'))
    {
        console.log(" Congratulations, you Win!"+user)
        return true
    }else{
        if((board[1][0] === 'O' && board[1][1] === 'O' && board[1][2] === 'O')||
        (board[2][0] === 'O' && board[2][1] === 'O' && board[2][2] === 'O')||
        (board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === 'O')||
        (board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O')||
        (board[0][2] === 'O' && board[1][2] === 'O' && board[2][2] === 'O')||
        (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O')||
        (board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O'))
        {
            console.log("You loose...")
            return true
        }
    }
   
}

    intro();
    
while(true)
{
    start()
    getBoard()

   if(wins())
   {
       console.log("break.......................")
       break
   }
}
