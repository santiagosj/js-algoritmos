//fibonacci
// ---iteracion o recursion---

// expresion fibonacci iterativa: devuelve los primeros n numeros de la secuencia

function fibIterativa(num){
    let arr = [0, 1];

    for (let i = 2; i < num; i++){
       arr.push(arr[i - 1] + arr[i - 2])
    }

   return arr
  }

//expresion fibonacci recursiva: devuelve los primeros n numeros de la secuencia

function fibRecursiva(num) {
    if (num < 2){
      return num
    }
    return fibRecursiva(num - 1) + fibRecursiva(num - 2)
  }

//Fibonacci inversa algoritmo iterativo
/*
1)Declarar un array de tamaño n
2)Inicializar a[0] = 0 y a[1] = 1;
3)Hacer un loop desde 2 hasta n - 1 y almacenar la suma de a[i - 2] en a[i]
4)Imprimir el array en reversa
*/ 
function fibonacciReverse(num){

  let arr = [0, 1];

  for (let i = 2; i < num; i++){
      arr.push(arr[i-1] + arr[i-2])
  }

  return arr.reverse()
}

fibonacciReverse(16)

function sumaFiboImpares(num){
  var arr = [0, 1];
  
  var result = 0;

  while (arr[1] <= num) {
      //chequea si es impar
      if (arr[1] % 2 !== 0) {
          result += arr[1];
      }

      arr[1] += arr[0];
      arr[0] = arr[1] - arr[0];
  }

  return result;
  
}

===========================================================================
    //suma de numeros primos
function sumarPrimos(num) {
  // paso 1 genero un array de numeros a desde el primer numero primo (2) hasta el numero que paso por parametro.
  let arr = Array.from({length: num+1}, (x, y) => y).slice(2); 
  // paso 2 filtro los numeros primos
  let primos = arr.filter( (n) => { 
    let m = n - 1;
    while (m > 1 && m >= Math.sqrt(n)) { 
      if ((n % m) === 0) 
        return false;
        m--;
    }
      return true;
  });
  // paso 3 sumo los valores reducidos a un valor unico.
  return primos.reduce((a,b) => a + b); 
}
