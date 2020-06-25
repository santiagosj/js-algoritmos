function curryFunc(func){

   return function f1(){
       
       let args = Array.prototype.slice.call(arguments,0)
        
       if(args.length >= func.length){
           return func.apply(null, args)
       }else{
            return function f2(){
                let args2 = Array.prototype.slice.call(arguments,0)
                return f1.apply(null, args.concat(args2))
            }
       }
   }
}

module.exports = curryFunc 