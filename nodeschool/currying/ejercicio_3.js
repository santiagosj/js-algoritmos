/*
1. Making use of valueOf property 
const add = (a) => {
    let sum = a;
    const resultFn = (y) => {
       sum += y;
       return resultFn;
    }
    resultFn.valueOf = () => sum
  
    return resultFn;
}

5 + add(3)(4)(2) === 14
//true
5 + add(3)(4)(2)
//14*/

/*
2-Explicit call to a property
function add(x){
    let sum = x;
    return function resultFn(y){
        sum += y;
        resultFn.result = sum;
        return resultFn;
    }
}

add(3)(4)(5).result //output: 12
var t = add(3)(4);
t.result //output: 7
t(5).result //output: 12*/

/*
3. Explicit call to function with no arguments for final result
function add(x){
    let sum = x;
    return function resultFn(y){
        if(arguments.length){ //not relying on falsy value
            sum += y;
            return resultFn;
        }
        return sum;
    }
}

 add(2)(3)() //output: 5
 var t = add(3)(4)(5)
 t() //output: 12
 */

/*
 Solution using arguments count
function add(){
    let args = [].slice.apply(arguments);
    function resultFn(){
        args = args.concat([].slice.apply(arguments));
        if(args.length>=3){
            return args.slice(0,3).reduce(function(acc,next){ return acc+next},0); //will only sum first 3 arguments
        }
        return resultFn;
    }
    return resultFn();
}

 add(2)(3)(4) //output: 9
 add(2,3,4) //output: 9
 add(2)(3,4) //output: 9
 add(2,3)(4)*/

 /*function fixCurry(fn, totalArgs){
    totalArgs = totalArgs ||fn.length
        return function recursor(){
            return arguments.length<totalArgs?recursor.bind(this, ...arguments): fn.call(this, ...arguments);
        }
}

 var add = fixCurry( (a,b,c) => a+b+c ); //fn = summation function
 console.log(add(1,2, 3))  // output: 6
 console.log(add(1)(2,3)) // output: 6
 console.log(add(1)(3)(2)) // output: 6
 console.log(add(1,2)(3)) // output: 6*/

 function add (a){
     let sum = a;
     function result(b){
         sum += b
         return sum
     }

      return result
 }

module.exports=add;