
// let arr = [23,2,1,56,0,7]


// // calling callback function

// sort(arr,function(err,data){
  
//     if(data)
//     {
//         console.log(data)
//     }
//     else{
//         console.log("not sorted",err)
//     }
// })

// function sort(getArray,callback)
// {
//     try {
//         for(let i = 0;i<getArray.length;i++)
//           {
//         for(let j = i+1;j<getArray.length;j++)
//         {
//             if(getArray[j]<getArray[i])
//             { 
//                 let temp = getArray[j]
//                 getArray[j] = getArray[i]
//                 getArray[i] = temp
//             }
//         }
//     }
//     callback(null,getArray)
//     } catch (error) {
//         callback(error)
//     }
    

    
// }



class Subject{
    constructor(){
        this.observers = [];
    }
    //adding an observer to this.observers
    addObserver(observer){
    
        this.observers.push(observer)
    }


    removeObserver(observer)
    {
        const index = this.observers.findIndex(obs =>{return observer === obs})

        if(index !== -1)
        {
            this.observers.splice(index,1)
        }
        else{
            console.log("no array")
        }
    }

    notify(data){

        if(this.observers.length > 0)
        {
            this.observers.forEach(observer => observer.update(data));
        }
    }
}

export default Subject;

