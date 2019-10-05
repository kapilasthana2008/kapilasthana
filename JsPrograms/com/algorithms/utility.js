//defining an object.
var methods = {};

// property of object method input function 
methods.input = function()
{
    // takes user input
    const input = require("readline-sync")
                
    var num = input.question();
    // returning input.
    return num;
}

methods.numInput = function()
{
    // takes user input
    const input = require("readline-sync")
                
    var num = input.questionInt();
    // returning input.
    return num;
}
// property of object method inputarray function and passing size as an argument to function 
methods.inputarray = function(size)
{
    var arr = [];
    console.log("insert elements");
    for (var index = 0; index < size; index++) {
       //inserting user input into array.
        arr[index] = parseInt(methods.input());
    }
    // return final array with elements.
    return arr;
}

// function for sorting array.
methods.sort = function(arr)
{
    var temp = Array.from(arr);
    //loop for reading array row
    for (var i = 0; i < arr.length; i++) {
    //loop for reading array cols	
        for (var j = 0; j < arr.length; j++) {
            
            //if next element is greater than previous then swap. 
            if (arr[i]<arr[j]) {
                var temp = '';
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
// returning sorted array.
    return arr;
}
// method to creat 2D array.
methods.integer2d = function(rows,cols)
{
    //initialize array with no of rows
    var myarr1 = new Array(rows);
//creating column at every row.
    for (var i  = 0; i<rows ;i++) {
        myarr1[i] = new Array(cols);
    }

    //input elements.
    console.log("enter elements")
    for (var i  = 0; i<rows ;i++) {
    
        for (var j  = 0; j<cols ;j++) {
            myarr1[i][j] = parseInt(methods.input());
            
        }
    }
//returning arraoy after joining all elements.
    return myarr1.join("\n")
}
//method for creating double array. 
methods.float2d = function(rows,cols)
{
    //initializing array with rows
    var myarr1 = new Array(rows);
    // creating columns withing every rows.
    for (var i  = 0; i<rows ;i++) {
        myarr1[i] = new Array(cols);
    }

    //input elements.
    console.log("enter elements")
    //inserting elements on every cell in array.
    for (var i  = 0; i<rows ;i++) {
    
        for (var j  = 0; j<cols ;j++) {
           
            // labelName of while loop
            internalLoop:
           while(true)
           {
               // checking every input is float or not
            var num = parseFloat(methods.input());
            if (isNaN(num))
            {
                //if input is string then display enter again upto enter correct input
                console.log(" this is not float");
                console.log("enter again.");
            }else{
                //if input is correct then insert into the cell
                myarr1[i][j] = num;
                //breaking internal loop.
                break internalLoop;
            }
        }
       }
    }
    //return the array 
    return myarr1.join("\n")
}
methods.boolean2d = function(rows,cols)
{
    console.log("boolean 2d");
    //initializing array with rows
    var myarr1 = new Array(rows);
    // creating columns withing every rows.
    for (var i  = 0; i<rows ;i++) {
        myarr1[i] = new Array(cols);
    }

    //input elements.
    console.log("enter elements")
    //inserting elements on every cell in array.
    for (var i  = 0; i<rows ;i++) {
    
        for (var j  = 0; j<cols ;j++) {
           
            var value = methods.input();
                myarr1[i][j] = value;
         
        
       }
    }
    //return the array 
    return myarr1.join("\n")
}
// insertion sort function
methods.insertionSort = function(arr)
{
    for(let i = 0; i<arr.length;i++)
    {
        let j = i+1;
        while(j>0)
         {   //comparing elements if arr[j-1] is greater then swap.
             if(arr[j]<arr[j-1])
            {
                //swapping elemets.
                let temp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = temp
            }
            //decrementing j value.
            j = j-1;
        }
    }
    //return sorted array after sorting.
    return arr;
}
//bubble sort methods
methods.bubbleSort = function(arr)
{
    for(let i = 0; i<arr.length;i++)
    {
        for(let j= i+1;j<arr.length;j++)
        {
            if(arr[i]>arr[j])
            {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp;
            }
        }
    }
    return arr;
}
methods.binarySearch = function(lower,num)
{
    let low = 0
    let high = num

    let mid = Math.floor((low+high)/2)
    
    while(low != high)
    {
        mid = Math.floor((low+high)/2)
        console.log("Is your number less than "+mid+"?")
        let bool = methods.input()
        
        if(bool === "true")
        {
            high = mid;
        }
        else{
            low = mid+1;
        }
    }
    return low
}

methods.ArrayMatrix = function(rows,cols)
{
    var myarr1 = new Array(rows)

    for (var i  = 0; i<rows ;i++) {
        myarr1[i] = new Array(cols);
    }
    return myarr1
}
// method for find binary.
methods.findBin = function(num)
{
    if(isNaN(num)|| num > 128)
    {
        console.log("It may be not a number or may be exceeded from 128.")
    }else{
        
        try {
            
            
        } catch (error) {
            
        }
    }
    
}
exports.data = methods