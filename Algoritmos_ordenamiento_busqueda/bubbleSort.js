/*ORDENAMIENTO POR INTERCAMBIO DIRECTO (burbujeo)*/

/*
public static void burbuja(int[]a){
   for(int i = 1; i < a.length; i++){
     for(int j = 0; j < a.length - i;j++){
        if(a[j] > a[j + 1]){
          int aux = a[j + 1];
          a[j] = a[j + 1];
          a[j + 1] = aux;
      }
    }
  }
}
*/

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
