//ejercicio-1 básico
const nombre = 'Santi'

function saludar(){
    const vos = 'Ameo';

    function hola(){
        console.log(`Hola ${vos} como estas? mi nombre es ${nombre}`)
    }

    hola();

}

saludar();

//ejemplo-1
const symbol = '¥';

function displayPrice(price) {
  const symbol = '$';
  console.log(symbol + price);
}

displayPrice('80');

//imprime $80
//ejemplo-2
let n = 2;

function myFunction() {
  let n = 8;
  console.log(n);
}

myFunction();
//8

/* =============================CLOSUSRE=============================== */
/*
   Un closure o clausura es la combinación de una función y el ámbito léxico en el que se declaró dicha función. 
   Es decir los closures o clausuras son funciones que manejan variables independientes. 
   En otras palabras, la función definida en el closure "recuerda" el ámbito en el que se ha creado.
   Permiten mantener encapsular la informacion 
*/

function init() {
  var nombre = "Santi"; // 'nombre' es una variable local creada por la función 'init'
  function muestraNombre() { // 'muestraNombre' es una función interna (un closure)
    console.log(`Hola ${nombre}, como estas?`); // dentro de esta función usamos una variable declarada en la función padre
  }
  muestraNombre();
}
init(); 

/*
Recolección de basura
JavaScript gestiona la memoria con recolección de basura automática. Esto significa que cuando los datos ya no son referenciables (es decir, no hay referencias restantes a esos datos disponibles para el código ejecutable), se "recolecta basura" y se destruirá en algún momento posterior. Esto libera los recursos (es decir, la memoria de la computadora) que los datos habían consumido una vez, haciendo que esos recursos estén disponibles para su reutilización.

La recolección de basura en el contexto de los closures: 
Sabemos que las variables de una función primaria son accesibles para la función interna anidada.
 Si la función anidada captura y usa las variables de sus padres (o variables a lo largo de la cadena de alcance, como las variables de sus padres), esas variables permanecerán en la memoria mientras las funciones que las utilizan puedan ser referenciadas.

*/ 

function myCounter() {
  let count = 0;
   
  return function () {
    count += 1;
    return count;
  };

}

