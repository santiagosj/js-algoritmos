//MERGE SORT O ORDENAMIENTO POR MEZCLA
/*
1-Si la longitud de la lista es 0 o 1, ya está ordenada;
2-Dividr la lista desordenada en dos sublistas de la mitad del tamaño o aprox;
3-volver a dividir las dos listas para obtener 4 sublistas
4-dividir las 4 listas en dos para hasta obtener valores individuales
5-comparar parejas y armar de menor a mayor parejas de dos
6 comparar parejas de a dos y armar sublistas de 4 de menor a mayor
7-comparar estas dos ulitmas listas y ordenarlas en una de menor a mayor
*/
function merge(left, right, arr) {
  var a = 0;

  while (left.length && right.length) {
    arr[a++] = (right[0] < left[0]) ? right.shift() : left.shift();
  }
  while (left.length) {
    arr[a++] = left.shift();
  }
  while (right.length) {
    arr[a++] = right.shift();
  }
}

function mergeSort(arr) {
  var len = arr.length;

  if (len === 1) {
    return
  }

  var mid = Math.floor(len / 2),
      left = arr.slice(0, mid),
      right = arr.slice(mid);

  mergeSort(left);
  mergeSort(right);
  merge(left, right, arr);
}

var a =[55, 6, 12, -2, 0, 7, 4, 38, 32, 23]

mergeSort(a)

console.log(a)
