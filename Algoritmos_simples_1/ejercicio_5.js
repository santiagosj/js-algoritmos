// Sumar todos los numeros impares de la secuencia fibonacci menores que el parametro de la funcion
// ---iteracion o recurcion---

// expresion fibonacci iterativa: 

function fib(n){
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++){
      arr.push(arr[i - 2] + arr[i -1])
    }
   return arr[n]
  }

//expresion fibonacci recursiva:

function fib(n) {
    if (n < 2){
      return n
    }
    return fib(n - 1) + fib (n - 2)
  }

  
