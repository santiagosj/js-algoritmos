/*ORDENAMIENTO POR INTERCAMBIO DIRECTO (burbujeo)*/

/*
1-Compara los dos primeros items del array.

2-Si [i] es mayor que [i + 1] cambia de posicion los items del array para que [i] sea menor que [i + 1]

3-compara los dos siguientes items, de los cuales el de la izaquierda era el de la derecha en el paso anterior.

repite el loop tantas veces como cantidad de items tenga el array

podria tambien ser de la siguiente manera:

function burbuja(a){

    var cambio;
    var n = a.length-1;
    var x = a;

    do {
        cambio = false;
        for (var i = 0; i < n; i++){

            if ( x[i] < x[i+1] ){

               var temp = x[i];

               x[i] = x[i+1];
               x[i+1] = temp;
               cambio = true;
            }
        }
        n--;
    } while (cambio);
 return x;
}

en siguiente caso [i - 1] es el item anterior a [i]
*/

Array.prototype.burbuja = function (){

   var cambio = false;

   while (!cambio) {

      cambio = true;

      for (var i = 1; i < this.length; i++){

        if (this[i - 1] > this[i]) {

          cambio = false;

          var tmp = this[i - 1];
          this[i - 1] = this[i];
          this[i] = tmp;

        }

      }

    }
    return this;

};

let misNumeros = [ 6, 12, 4, 35, 26, -3, 49, 81, 20 ]

let misLetras = [ 'N', 'C', 'F', 'B', 'Z', 'O', 'A' ]

misNumeros.burbuja()

misLetras.burbuja()

console.log(misNumeros)

console.log(misLetras)
