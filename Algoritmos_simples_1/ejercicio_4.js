//sumando todos los valores entre dos elementos de nun array
function sumAll(arr) {
    let sum = 0;
    for(let i = Math.min(...arr); i <= Math.max(...arr); i++){
       sum += i
    }
    return sum;
  }
  
  sumAll([1, 4]);

  //============================================================
  //diferencia entre dos arrays
  function diffArray(arr1, arr2) {

    return [
      ...diff(arr1, arr2),
      ...diff(arr2, arr1)
    ]
    
    function diff(a, b) {
        return a.filter(item => b.indexOf(item) === -1);
    }

  }

  
//==================================================================
//sacando elementos de un array especificando por parametro
//el ejemplo 1 en realidad devuelve el/ los elementos no especificados

  const destroyer = (arr, ...args) => arr.filter(i => !args.includes(i));

  destroyer([1,2,3,2,1,5], 2, 1);

//==============================================================
//funcion para devolver objeto de una coleccion segun un parametro que se le ingrese..

function whatIsInAName(collection, source) {
  
  var srcKeys = Object.keys(source) //asigna identificador
  
 return collection.filter(function (obj) {

     for(var i = 0; i < srcKeys.length; i++) {

       if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {

         return false;

       }

     }
     return true;
   });
 }