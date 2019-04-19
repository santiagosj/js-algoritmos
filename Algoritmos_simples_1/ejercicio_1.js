//algoritmos simples con Dummy Data
//==============================================================================
//hacer un algoritmo que realize le sumatoria de todos los numeros enteros desde el 1 la 10

function sumaEnteros(){
    let result = 0;
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        for (var i = 0; i < numeros.length; i++) {
            result += numeros[i]
        }

      console.log(result)
}

sumaEnteros()

//==============================================================================

//imprimir numeros pares en un array e impares en otro

separandoNumeros = (arr) => {
  let pares = []
  let impares = []

  for (var i = 0; i < arr.length; i++) {
       arr[i] % 2 == 0 ? pares.push(arr[i]) : impares.push(arr[i])
      }
        console.log(pares)
        console.log(impares)
}

let misNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

separandoNumeros(misNumeros)

//==============================================================================
//en este ejemplo en particular me pregunto cual sería la estructura de datos adecuada para trabajar de manera mas integral las materias, los alumnos y las calificaciones, ya que este es solo un ejemplo simple para promediar y clasificar.
//quizàs en un ejemplo mas sercano a la vida real los alumnos y las materias estarian almacenados en clases respectivamente??
//imprimir un promedio de calificaciones y en base al promedio una calificacion final en formato letra.

calificacionFinal = (notas, materia, alumno) => {
  let promedio = 0;
  let notaFinal;

//calculamos el promedio sumando todas las notas y dividiendo este numero por la cantidad de notas

     for (var i = 0; i < notas.length; i++) {
           promedio += notas[i] / notas.length
         }

//clasificamos los rangos de calificacion

    if (promedio >= 1 && promedio < 4) {
         notaFinal="D"
          console.log(materia + " " + "Promedio " + promedio + " de " + alumno + " nota final: " + notaFinal)
    } else if (promedio >= 4 && promedio < 6) {
         notaFinal="C"
          console.log(materia + " " + "Promedio " + promedio + " de " + alumno + " nota final: " + notaFinal)
    } else if (promedio >= 6 && promedio < 8) {
         notaFinal="B"
          console.log(materia + " " + "Promedio " + promedio + " de " + alumno + " nota final: " + notaFinal)
    } else if (promedio >= 8 && promedio < 11) {
         notaFinal="A"
          console.log(materia + " " +  "Promedio " + promedio + " de " + alumno + " nota final: " + notaFinal)
    }

//y voilá..ulalá

}

//calificaciones por trimestre suponiendo que le alumno tenga 4 examenes por materia

let calificaciones = [8, 7, 9, 8]

calificacionFinal(calificaciones, "Historia", "Eric Cartman")

//==============================================================================

let numerosSimples = [1, 4, 9]

let dobles = numerosSimples.map(x => x * 2);

console.log(numerosSimples)
console.log(dobles)

//==============================================================================

//celcis a fahrenheit

convertirCelenFa = (celcius) => {
  let fahrenheit = (celcius * (9/5)) + 32;

  if (typeof fahrenheit !== undefined) {
    console.log(fahrenheit);
  }else{
    console.log("el dato es incorrecto")
  }
}
convertirCelenFa(30)

//==============================================================================

//reverse a string

function reverseString(str){
  console.log(str.split('').reverse().join(''))
}

reverseString("hola")

function reverseString2(str){
  let arr = [...str]
  let newStr = arr.map((_, i, arr) => arr[arr.length - 1 - i])

  console.log(newStr.join(''))
}

reverseString2("anita lava la tina")

//==============================================================================

//factorizando un numero con recurción

function factorialRecursivo(num) {
  if (num == 0) {
    return 1;
  }
  return num * factorialRecursivo(num - 1);
}

factorialRecursivo(5);

//==============================================================================
//encontrando el string mas largo

function encontrarElStringMasLargo(str) {
  let newStr = str.split(' ');
  let bigestString = 0;

  for(let i = 0; i < newStr.length; i++) {
       if(newStr[i].length > bigestString){
           bigestString = newStr[i].length
     }
  }
   console.log(bigestString);
}

encontrarElStringMasLargo("Me veras caer como una flecha salvaje");

//==============================================================================
//armar un array con los numeros mas grandes de los subarrays

function numerosMasGrandes_1(arr){

  let nuevoArr = [];

  for (var i = 0; i < arr.length; i++) {

       var numeroMayor = arr[i][0]

       for (var j = 1; j < arr[i].length; j++) {

            if (arr[i][j] > numeroMayor) {
                numeroMayor = arr[i][j]
                }
       }
       nuevoArr.push(numeroMayor)
   }
    console.log(nuevoArr)
}

numerosMasGrandes_1([[6,25,15,78],[10,40,35,16],[83,87,91,101],[255,1000,150,1]])

//==============================================================================
// comparar elementos de un array y contar los pares(hackerrank)
//n representa la variedad de colores y ar la cantidad de unidades de medias que hay
function paresDeMedias(n, ar){
     const colors = {}

     let pares = 0;

     for(let i = 0;i < n; i++){

         if(colors[ar[i]]){
             pares++;
             colors[ar[i]] = 0;
         } else {
             colors[ar[i]] = 1;
         }
     }
     //return pares;
     console.log(pares);
}

var medias = [1, 2, 1, 3, 2]

paresDeMedias(5, medias)

//===============================================================================
//saltar unos: funcion que permite saltar en un array compuesto de 0s y 1s si c[i] == 1 salta y busca hacer la menor cantidad de saltos posibles, el resultado final es el numero de saltos realizados

const saltandoUnos = (c) => {

  var jump = 0;

  // con el loopwhile let i = 0; 
  /*for(let i = 0; i < c.length - 1; i++){
      if (c[0] === 1) {
          break;
      }

      if (c[i + 2] !== 1) {
          jump++
          i = i + 1;
          continue;
      }

      if (c[i + 1] !== 1) {
          jump++
          continue
      }
     
  }*/

/*while(i < c.length){

   if(c[i + 2] ===0 ) i += 2

   else i+= 1

   if( i !== c.length) jump++

   console.log({jump, i})
}*/

for(let i = 0; i < c.length - 1; ++jump){
    i += c[i+2] ? 1 : 2;
 }

  console.log(jump);
  
}

var cerosYunos = [ 0, 0, 0, 1, 1, 0 ]

saltandoUnos(cerosYunos);

//===========================================================================
