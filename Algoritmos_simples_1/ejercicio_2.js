//ES6--->usando funciones map filter y reduce

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  
  const squaredIntegers = arr.filter(num => num % 2 == 0 && num > 1).map(num => num * num);
  
  return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

//==========================================================================
//operador de propagacion ejemplo super simple

const sum = (function() {

  "use strict";

  return function sum(...args) {
   
    return args.reduce((a, b) => a + b, 0);
  };

})();

console.log(sum(1, 2, 3)); 
//==========================================================================
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];

let arr2;

(function() {

  "use strict";

  arr2 = [...arr1]; 

})();

console.log(arr2);
//========================================================================
//asignacion por destructuring a variable de un objeto

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  
  const { tomorrow : tempOfTomorrow } = avgTemperatures; 
  
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); 

//========================================================================

const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {

  "use strict";

    const {tomorrow :{max : maxOfTomorrow} } = forecast; 
  
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); 

//========================================================================

let a = 8, b = 6;

(() => {

  "use strict";
  
 [a, b] = [b, a]
  
})();
console.log(a); 
console.log(b); 

//=======================================================================
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  
  const [,,...arr] = list; 
  
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

//======================================================================
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; 

  return function half({max, min}) {
    
    return (max + min) / 2.0;
  };
  
})();
console.log(stats); 
console.log(half(stats)); 

//========================================================================
//template literal

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
  "use strict";
 
  const resultDisplayArray = [ `<li class="text-warning">no-var</li>`,
                               `<li class="text-warning">var-on-top</li>`, 
                               `<li class="text-warning">linebreak</li>` ];

  return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);

//========================================================================
//ejemplo simple simple 

const persona = {
  nombre: "Jerald",
  edad: 56
};

const saludar = `Hola mi nombre es ${persona.nombre}!
tengo ${persona.edad} años de edad.`;

console.log(saludar)

//======================================================================
//ES6 crear objeto 
const crearPersona = (nombre, edad) => ({nombre,edad}); //crea un objeto con esos atributos.

crearPersona('Santi',32)
//======================================================================
//declaracion concisa de funciones 
const perro = {
    nombre:'Willy',
    edad:13,
    ladrar(){
        console.log('guau guau!')
    },
    saludar(){
        console.log('mi nombre es ' + `${perro.nombre}`)
    }
}
perro.edad();
perro.saludar();

//=====================================================================

class Perro {
    constructor(nombre, color, edad, comidaFavorita){
          this.nombre = nombre;
          this.color = color;
          this.edad = edad;
          this.comidaFavorita = comidaFavorita;
          this.ladrar = () => {
             console.log('guaaauuuu!')
          }
      }
}


var perro = new Perro('willy')
//=====================================================================
//setters and getters ejemplo-1

class Libro {
  constructor(autor) {
    this._autor = autor;
  }
  // getter
  get escritor(){
    return this._autor;
  }
  // setter
  set escritor(actualizarAutor){
    this._autor = actualizarAutor;
  }
}

const lol = new Libro('anonymous');

console.log(lol.escritor);  

lol.escritor = 'wut';

console.log(lol.escritor);  

//ejemplo-2

class Termostato{

  constructor(fahrenheit){

       this.fahrenheit = fahrenheit;

   }
     get temperatura(){
         return 5 / 9 * (this.farenheit - 32);
     }

     set temperatura(celsius){
         this.farenheit = celsius * 9.0 / 5 + 32;
     }

 }

 const temperatura = new Termostato(25) //paso la temperatura en fahrenheits y la devuelve en celsius.
