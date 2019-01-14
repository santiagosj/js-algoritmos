/*ORDENAMIENTO POR INTERCAMBIO DIRECTO (burbujeo)*/

Array.prototype.burbuja = function (){
   var listo = false;
   while (!listo) {
      listo = true;
      for (var i = 1; i < this.length; i++){
        if (this[i - 1] > this[i]) {
          listo = false;
          var tmp = this[i - 1];
          this[i - 1] = this[i];
          this[i] = tmp;
        }
      }
    }
    return this;
};

let misNumeros = [ 6, 12, 4, 35, 26, 49, 81, 20 ]
let misLetras = ['N', 'C', 'F', 'B', 'Z', 'O', 'A']
misNumeros.burbuja()
misLetras.burbuja()
console.log(misNumeros)
console.log(misLetras)
