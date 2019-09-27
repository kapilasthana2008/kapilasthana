/**
 * Regex :
 *      systax: /pattern/modifier
 *               String / ig ->  i stands for insensitive
 *                               g stands for global it uses for global match
 * 
 *     methods:
 * 
 *      search() = it returns that string's start index
 *      replace() = it returns entire string with replaced value
 *      
 *  */

var str = "value of THAT expression will replace the it is not ergrt note given argument"

console.log(str.replace(/anurag/ig,"kapil's")) // -> Regex /pattern/modifier