/**
 * Point free
 */

 const pointFree  = (route, callback) => {

     //... some code 

     const result = aReallyHeavyFunction();
     callback(result)
 }

 /**
 * 💩 Instead of doing this...
 */
pointFree('/users', result => {
    //some code here...
})

/**
 * 👍 ... It is better to do this (Point free)
 */
const handler = result => {
    //some code here...
} 

pointFree('/users',handler)