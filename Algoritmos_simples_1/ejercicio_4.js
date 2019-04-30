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
//funcion para devolver objeto de una coleccion de objetos segun un parametro que se le ingrese..

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

 //================================================================
 //funcion que devuelve un string unido por guiones en minuscula buen recurso https://regex101.com/

 //return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase() solucion 1

 //solucion 2
 function spinalCase(str) {

  var regex = /\s+|_+/g;  

  str = str.replace(/([a-z])([A-Z])/g, '$1 $2')
 
  return str.replace(regex,'-').toLowerCase();
}

//==================================================================

function translatePigLatin(str) {
  
  // Create variables to be used
   var pigLatin = '';
   var regex = /[aeiou]/gi;
 
   // Check if the first character is a vowel
   if (str[0].match(regex)) {
     pigLatin = str + 'way';
 
   } else if(str.match(regex) === null) {
     // Check if the string contains only consonants
     pigLatin = str + 'ay';
   } else {
 
     // Find how many consonants before the first vowel.
     var vowelIndice = str.indexOf(str.match(regex)[0]);
 
     // Take the string from the first vowel to the last char
     // then add the consonants that were previously omitted and add the ending.
     pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
   }
 
   return pigLatin;
 
 }
 
 translatePigLatin("consonant");

//=====================================================================
//reemplazar un string con otro

const remplazo = (str,before,after) => {

  var newDesp; 
  
   if(before[0].match(/^[A-Z0-9]/)){

        newDesp = after[0].toUpperCase()
       
        return str.replace(before, newDesp.concat(after.slice(1,after.length)))
  
     } else {

       return str.replace(before, after)

     }
}

//===================================================================
//Estructura de ADN
function pairElement(str) {
  //objeto con pares
  var pairs = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  }
  //transformar el string en un array
  var arr = str.split("");
  //mapeo del array y asignacion en funcion del modelo Objeto.pairs
  console.log(arr.map( x => [ x, pairs[x] ] ))
  return arr.map( x => [ x, pairs[x] ] );
}

pairElement("GCG");

//===================================================================
//encontrando el caracter faltante en un fragmento de string: 'abcdefghijklmnñopqrstuvwxyz'
function findMiss(str){

  var comp = str.charCodeAt(0), missing;

  str.split('').map((letra, index)=>{

      if(str.charCodeAt(index) == comp){

         ++comp

       } else {

         missing = String.fromCharCode(comp);

      }
  
   })
   
  console.log(missing)

   return missing;

 }

 //=================================================================================
 //funcion que recibe multiples arrays y devuelve uno solo si repetir elementos
 //el objeto Set permite almacenar valores unicos de cualquier tipo:checkear developers.mozilla reference 

 function arrayConElementosUnicos(...arr) {
   
  const array = [].concat(...arr)
  
  console.log([...new Set(array)])

  return [...new Set(array)]
  }
  
  arrayConElementosUnicos([1, 3, 2], [5, 2, 1, 4], [2, 1]);

  //===============================================================================
  //convierte elemento html en string literal con el que se lo invoca, con expresiones regulares...
  function convertHTML(str) {
   console.log(str.replace(/&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\'/g, "&apos;"))
  }
  
  convertHTML("Coca & Fernet");

  const convertHTML2 = (str) => {

    elements = {
      '&':'&amp;',
      '<':'&lt',
      '>':'&gt',
      '"':'&quot',
      '\'':'&apos'
    }
     
     console.log(str.split('').map(elem => elements[elem] || elem).join(''))
  }
   
  convertHTML2("Starsky & Hutch");

  //================================================================================
  //diubjos basicos

  const trinagulo = (base) => {
    let hash = '';

    for(let i = 0; i < base.length; i++){
       hash += '#'
       console.log(hash + '\n')
    }
  }
  
   trinagulo(8)

  function chessBoard(){
    let brick = '';
    for(let i = 0;i < 8; i++){
       for(let j = 0; j < 8; j++){
          brick += '#'
        }
          brick += '\n'
     }
     console.log(brick)
  }
  chassBoard()
//=================================================================================
//clasico fizzBuzz
function fizzBuzz(){
  let numbers = [];
  let count = 0;

  for(let i = 0;i < 100;i++){
     count++
     numbers.push(count)

     if(numbers[i] % 3 == 0){
         numbers[i]='Fizz'
      }else if(numbers[i] % 5 == 0){
         numbers[i]='Buzz'
      }else if(numbers[i] % 3 == 0 && numbers[i] % 5 == 0){
         numbers[i]='FizzBuzz'
      }
   }
  console.log(numbers)
}

fizzBuzz()
