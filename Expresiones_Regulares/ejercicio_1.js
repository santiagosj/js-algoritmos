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
