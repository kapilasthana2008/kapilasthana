const util = require("../algorithms/utility")
const board = [[1,2,3],[4,5,6],[7,8,9]]
let count = 0

console.log(board.join())

console.log("lets play..")

// comp play.
function comp()
{
    let col,row
    let column = Math.floor(Math.random()*10)

    if(column<=8)
    {
        if (column === 0)
        {
            row = 0 
            col = 0
        console.log(`row ${row} and col ${col}`)
        }

        else if (column === 1)
        {row = 0 
        col = 1
        console.log(`row ${row} and col ${col}`)
        insert(row,col)
    
        }
       else if (column === 2)
        {row = 0 
        col = 2
        console.log(`row ${row} and col ${col}`)
        insert(row,col)
        }

        else if (column === 3)
        {row = 1 
        col = 0
        console.log(`row ${row} and col ${col}`)
        insert(row,col)
        }
        else if (column === 4)
        {row = 1 
        col = 1
        console.log(`row ${row} and col ${col}`)
        insert(row,col)
        }
        else if (column === 5)
        {row = 1 
        col = 2
        console.log(`row ${row} and col ${col}`)
        insert(row,col)
        }
        else if (column === 6)
        {
        row = 2 
        col = 0
        console.log(`row ${row} and col ${col}`)
        insert(row,col)
        }
        else if(column === 7)
        {
        row = 2 
        col = 1
        console.log(`row ${row} and col ${col}`)
        insert(row,col)
        }
        else if(column === 8)
        {
        row = 2 
        col = 2
        console.log(`row ${row} and col ${col}`)
        insert(row,col)
        }
        return
        // process.exit(1)

    }
}

// user play 

function userPlay()
{

}

function isvalid(row,col)
{
    
    if(board[row][col] !== 'X' ||board[row][col] !== 'O')
    {
       
        return true
    }
    else
    {
        return false
    }
}

function insert(row,col)
{
    
    if(isvalid(row,col))
    {
        board[row][col] = 'X'
        count = count+1;
    }
    else{
        comp()
    }
}


while(true)
{
    comp()
    if(count === 9)
    {
      console.log("count is ",count)
      console.log(board.join("\n"))
        break
    }

}
