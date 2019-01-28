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
