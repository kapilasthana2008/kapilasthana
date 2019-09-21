//importing module exports all function declared in utility.js file
 var input = require("./utility")
//var input = require("../functions/utility");

// taking user input in string1
console.log("enter string 1")
 var string1 = input.data.input()
//var string1 = input.one();
//taking user input in string2
console.log("enter string 2")
var string2 = input.data.input()

// If both string haven't same length then dispay a message not anagram and terminate 
if(string1.length != string2.length)
{
    console.log("both string are not anagrams");
    return;
}
else{
    //converting string1 into character array
    var stringtochar1 = string1.split('')
    
    /*sorting character array and join all chars to make whole string(i.e. char araay
     * converting back to string after sorting)
     */
    var sorted1 = input.data.sort(stringtochar1).join("");
    //converting string1 into character array
    var stringtochar2 = string2.split('')
     /*sorting character array and join all chars to make whole string(i.e. char araay
     * converting back to string)
     */
    var sorted2 = input.data.sort(stringtochar2).join("");
    
    // comparing if both sorted string are same then display anagram 
    if(sorted1 === sorted2)
    {
        console.log("anagram") // anagram
    }
    else{
        console.log("Not anagram") // not a anagram
    }
}

