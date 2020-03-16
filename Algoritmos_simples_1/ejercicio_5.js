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
  
  var resultado = 0;

  while (arr[1] <= num) {
      //chequea si es impar
      if (arr[1] % 2 !== 0) {
          resultado += arr[1];
      }

      arr[1] += arr[0];
      arr[0] = arr[1] - arr[0];
  }

  return resultado;
  
}

//===========================================================================
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

//====================================================================
/* Transformar array de elementos en objeto y contar cuantas veces se repite cada elemento sus valores*/

function countWords(inputWords) {

  var resultado = {};

  inputWords.reduce((valorAnterior, valorActual, indice, array)=>{

     if(!resultado[valorActual]){

          resultado[valorActual] = 1;

     } else {

          resultado[valorActual]++;

     }

     return valorActual;

  },null);
  
  return resultado;
}

//====================================================================
//minimo común multiplo

function mcm(arr){
  return arr
}

mcm([1,5])
 
//================================NodeSchool.io====================================
/**
 *1 - funcion de alto nivel recursiva
 * @param {function} operation 
 * @param {number} num 
 * 
 * -operation es una operacion que se repite n veces
 * -num es la cantidad de veces que se repite operation
 */
function repeat(operation, num) {
  if (num <= 0) return
  operation()
  return repeat(operation, --num)
}
/**
 * 2- basic map, convert this function:
 * 
 *  function doubleAll(numbers) {
      var result = []
      for (var i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * 2)
      }
      return result
    }

    module.exports = doubleAll
 * 
 * to a map
 */

 function doubleAll(numbers){
   return numbers.map(n => n * 2) 
 }
/**
 * 
 * @param {array to filter} messages 
 * filtrar los mensajes menores de 50 caracteres
 */
module.exports = function getShortMessages(messages) {
  return messages.filter(function(item) {
    return item.message.length < 50
  }).map(function(item) {
    return item.message
  })
}

//======================================== 
//DIFERENCIA SIMETRICA TEORIA DE CONJUNTOS
//========================================

const diff = (arr1, arr2) => [
  ...arr1.filter(item => !arr2.includes(item)),
  ...arr2.filter(item => !arr1.includes(item))
]
  
const sym = (...args) => [...new Set(args.reduce(diff))]

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]))

//=============================================================
//DISTINTAS MANERAS DE LEIMINAR ELEMNTOS DUPLICADOS DE UN ARRAY
//=============================================================

//1- transformar todos los arrays en un solo array
//2- filtrar el array

//a- Set
const arrayDeValoresUnicos1 = (...arrs) => {

   const arr = [].concat(...arrs)

   return [...new Set(arr)]
}

//b- Filter

const arrayDeValoresUnicos2 = (...arrs) => {

  const arr = [].concat(...arrs)

  return arr.filter((a, b) => arr.indexOf(a) === b )
}

//c- Reduce

const arrayDeValoresUnicos3 = (...arrs) => {

  const arr = [].concat(...arrs)

  return arr.reduce((a,b)=> a.includes(b) ? a : [...a, b],[])
} 

//==========================================================
//ACTUALIZACION DE INVENTARIO
//==========================================================

function updateInventory1(arr1, arr2) {
  
  var index

  var checkName = function(name){
      for(let i = 0;i < this.length; i++){
          if(this[i][1]===name){
              return i
          }
      }
      return undefined
  }

  for(var i = 0;i< arr2.length;i++){
       index = checkName.call(arr1,arr2[i][1])

       if(index === undefined){
           arr1.push(arr2[i])
       }else{
           arr1[index][0] += arr2[i][0]
       }
  }

  return arr1;
}

function updateInventory2(arr1, arr2) {
  
  var index

  arr2.forEach((e,i)=>{
      index = arr1.map(e => e[1]).indexOf(e[1])
      if(index == -1) arr1.push(e)
      else arr1[index][0] += e[0]
  })

  return arr1.sort((a,b)=>{a[1]< b[1]});
}

// ejemplos de inventario
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory1(curInv, newInv);
updateInventory2(curInv, newInv);
