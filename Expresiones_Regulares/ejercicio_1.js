//Metodo test

let miCadena = "Hola Mundo!";
let miExpReg = /Hola/;
let result_0 = miExpReg.test(miCadena)
console.log(result_0) //true

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

//Caracteres facil, devuelve solo la etiqueta <h1>

let someText = "<h1>Bazinga!</h1>";
let miExpReg_13 = /<h1>?/
let result_13 = someText.match(miExpReg_13)
console.log(result_13);

let pass = 'P1P2P3P4P5P6CCCP7P8P9';
let miExpReg_14 = /C+/;
let result_14 = pass.match(miExpReg_14);
console.log(result_14);

//buscando el primer valor de un string

let principio = "Nico y Santi son hermanos";
let miExpReg_15 = /^Nico/ // o /^nico/i
let result_15 = principio.match(miExpReg_15)
console.log(result_15);

//buscando el ultimo valor del string

let final = "Esta es la historia sin fin";
let miExpReg_16 = /fin$/;
let result_16 = final.match(miExpReg_16);
console.log(result_16);

//usando clases de caracteres

let someText_x = "Vamos a devolver la cantidad de caracteres en este string usando un atajo."
let miExpReg_17 = /\w/gi;
let result_17 = someText_x.match(miExpReg_17).length;
console.log(result_17);

//matching todo menos letras y numeros

let someText_y = "El mismo mecanismo pero en negación, no toma letras ni numeros 1234 etc.";
let miExpReg_18 = /\W/gi;
let result_18 = someText_y.match(miExpReg_18).length;
console.log(result_18);

//match digitos

let precioString = "El precio de mi Sandwitch es de $15.50";
let miExpReg_19 = /\d/g;
let result_19 = precioString.match(miExpReg_19);
console.log(result_19);

//negacion de digitos

let precioString_2 = "El precio de mi Sandwitch es de $15.50";
let miExpReg_20 = /\D/g;
let result_20 = precioString_2.match(miExpReg_19);
console.log(result_20);

//restricciones, ejemplo usuario-

let usuario = "skankhunt42";
let miExpReg_21 = /^[a-z]{2,}\d*$/i;
let result_21 = usuario.match(usuario);
console.log(result_21);

//detectando espacio en blanco

let espacioEnBlanco = "Al infinito y mas allá!";
let miExpReg_22 = /\s/g;
let result_22 = espacioEnBlanco.match(miExpReg_21);
console.log(result_22);

//negacion de espacio en bleanco

let espacioEnBlancoNo = "Al infinito y mas allá!";
let miExpReg_23 = /\S/g;
let result_23 = espacioEnBlancoNo.match(miExpReg_22).length;
console.log(result_23);

//especificando la cantidad de letras mínimo y máximo

let ohStr = "Ohhh no";
let miExpReg_24 = /Oh{3,6}\sno/;
let result_24 = miExpReg_24.test(ohStr);
console.log(result_24);
