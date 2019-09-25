
/**
 * 
 * @author   : kapil asthana
 * Date      : 25/09/2019
 * program   : Desc -> Take an Arithmetic Expression such as (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3)
 *             where parentheses are used to order the performance of operations. 
 *             Ensure parentheses must appear in a balanced fashion.
 * 
 **/
//importing utility function for linklist.
const util = require("./data_structureUtil.js")
const input = require("../algorithms/utility")
// taking input expression
const expression = input.data.input()


try {
    // checking type of input.
    if((typeof expression === "string"))
    {
        // iterating upto expression len.
        for(let i = 0; i<expression.length;i++)
        {
            // if '(' encounter at position of i 
            if(expression.charAt(i) === '(')
            {
              // inserting into link list.
                util.data.insertElement(expression.charAt(i))
            }
            else
            {
                // if ')' encounter at position of i
                if(expression.charAt(i) === ')')
                {
                    // removing node '('
                    util.data.removeSingleEle('(')
                }
                
            } 
        }
    }
} catch (error) {
    console.log(error)
}
// checking list is empty or not..
if(util.data.isEmpty())
{
    // if list is empty then expression is balanced.
    console.log("Balanced Paranthesis")
}
else{
    // else not balanced.
    console.log("Not Balanced Paranthesis")
}