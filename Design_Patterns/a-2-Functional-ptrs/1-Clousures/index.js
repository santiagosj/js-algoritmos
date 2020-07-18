/**
 * Closures
 */
 const x = 1

 const clousure = () => {
     const y = 2

     return () => {
         const z = 3
         console.log(x, y, z)
     }
 }

 clousure()

 /**
 * - Warning! -
 * 1.- x is available for everyone.
 * 2.- y is not available for global scope.
 * 3.- z is not available for foo or global scope.
 */