//Metodo test

let miCadena = "Hola Mundo!";
let miExpReg = /Hola/;
let result_0 = miExpReg.test(miCadena)
console.log(result_0)

 //es posible buscar cadenas literales

 let dondeEstaWally = "Willy, Wally, Waldo"
 let wallyExpReg = /Wally/;
 let result_1 = wallyExpReg.test(dondeEstaWally)
 console.log(result_1)

 //multiples cadenas literales

 let cadena = "Esta es mi cadena y de repente un apareció perro"
 let miExpReg_2 = /sapo|gato|pez|perro/
 let result_2 = miExpReg_2.test(cadena)
 console.log(result_2)

//ignore case

let miCadenaConMayusculas = "WhoLetTheDogsOut";
let miExpReg_3 = /wholetthedogsout/i;
let result_3 = miExpReg_3.test(miCadenaConMayusculas)
console.log(result_3)

//match method

let extractoCadena = "Extraemos la palabra 'JavaScript' de este texto";
let miExpReg_4 = /JavaScript/
let result_4 = extractoCadena.match(miExpReg_4)
console.log(result_4)

//match repeticion literal en cadena

let repeticion = "Brilla, brilla estrellita bla bla bla"
let miExpReg_5 = /brilla/gi
let result_5 = repeticion.match(miExpReg_5);
console.log(result_5)

//match con periodo comodín

let expresionCadena = "una canción termina con una acción que desencadena una reacción"
let miExpReg_6 =/ción./g
let result_6 = expresionCadena.match(miExpReg_6)
console.log(result_6)

//match con multiples posibilidades, encotrando todas las vocales

let citaTextual = "La inducción matemática demuestra que podemos subir tan alto como queramos en una escalera, demostrando que podemos bajar al peldaño inferior (la base ) y que de cada peldaño podemos subir al siguiente (el escalón )"
let miExpReg_7 =/[aeiou]/gi
let result_7 = citaTextual.match(miExpReg_7)
console.log(result_7.length)

//match todas las letras

let miExpReg_8 = /[a-z]/gi
let result_8 = citaTextual.match(miExpReg_8)
console.log(result_8.length)

//match numeros y letras con rango especifico

let textoConNumeros = "Blueberry 3.141592653s are delicious."
let miExpReg_9 = /[a-z0-9]/gi
let result_9 = textoConNumeros.match(miExpReg_9)
console.log(result_9)

//match con negacion..hacer match con todos los caracteres que no sean numeros o vocales

let textoConNumeros_2 = "3 tristes tigres";
let miExpReg_10 = /[^aeiou0-9]/gi
let result_10 = textoConNumeros_2.match(miExpReg_10)
console.log(result_10)

//match de caracteres que se repiten en una cadena

let cadenaCaracterRepetido = "como correr desnudo y no morir en el intento"
let miExpReg_11 = /r+/gi
let result_11 = cadenaCaracterRepetido.match(miExpReg_11)
console.log(result_11)

//match multiples veces suponinedo que queramos encotrar el dialogo de Chewbacca especificamenete

let chewbaccaLinea = "Aaaaaaaaaaaaaaaaaaaaaaarrrgh!";
let miExpReg_12 = /Aa*/
let result_12 = chewbaccaLinea.match(miExpReg_12)
console.log(result_12)

//Find Characters with Lazy Matching
