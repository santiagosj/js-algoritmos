/**
 * Basic: Reduce
 * # Task
 * Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array. Return the object directly (no need to console.log).
 * ## Example
 * var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
 * console.log(countWords(inputWords))=>
    // {ampoline
    //   Apple: 2,
    //   Banana: 1,
    //   Durian: 3
    // }
    ## Arguments

    * inputWords: An array of random Strings.
    ## Conditions

  * Do not use any for/while loops or Array#forEach.
  * Do not create any unnecessary functions e.g. helpers.

## Resources

  * https://en.wikipedia.org/wiki/Reduce_(higher-order_function)
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

## Boilerplate

    function countWords(inputWords) {
      // SOLUTION GOES HERE
    }

    module.exports = countWords
 */

function countWords(inputWords) {
      let result = {}
      
      inputWords.reduce((acc,curr,index,array)=>{

           if(!result[curr]){

               result[curr] = 1

           }else{

               result[curr]++;

           }

           return curr

      },null)

      return result
}
/**
 *  -------------------------------------------------------------
 * const countWords2 = arr.reduce((contadorNombre, nombre)=>{
    contadorNombre[nombre] = (contadorNombre[nombre] || 0) + 1
    return contadorNombre
},{})
    -------------------------------------------------------------
   function countWords(arr) {
      return arr.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
        return countMap
      }, {}) // second argument to reduce initialises countMap to {}
    }
    -------------------------------------------------------------
 */

  module.exports = countWords