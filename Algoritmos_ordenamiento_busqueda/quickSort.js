//QUICK SORT
/*
1-Lo primero que el algoritmo hace es encontrar el pivote en el array el pivote es el elemento base para la comparacion con los otros elementos del array en la primer vuelta del algoritmo.

2-Inicia un puntero en el extremo izquierdo del array.

3-Inicia un puntero en el extremo derecho del array.

4-Mientras el valor del puntero izquierdo sea menor que el valor del pivote, el puntero(izq) se mueve a la derecha (i++).Continua hasta que el valor del puntero(izq) es mayor o igual al valor del pivote.

5-Mientras el valor del puntero(der) sea mayor o igual al valor del pivote, el puntero(der) se mueve a la izquierda(j--).Continua hasta que le valor del puntero es menor o igual al valor del pivote.

6-Si el puntero de la izquierda es mayor o igual que el puntero de la derecha entonces cambia los valores en esa posicion del array.

7-Mueve el puntero de la izquierda a la derecha de a un valor, y mueve puntero de la derecha hacia la izquierda una posicion.

8-Si el puntero de la izquierda en este punto es menor o igual que el pivote y el puntero de la derecha es mayor o igual que el pivote, el algoritmo vuelve al paso 1.
*/

function swap(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

 function particion(items, izquierda, derecha) {
    var pivot = items[Math.floor((derecha + izquierda) / 2)],
            i = izquierda,
            j = derecha;

   while(i <= j){

     while (items[i] < pivot) {
        i++
     }

     while (items[j] > pivot) {
       j--
     }

     if (i <= j) {
       swap(items, i, j);
       i++;
       j--;
     }

   }
   return i

};

function quickSort(items, izquierda, derecha) {
  var index;

  if(items.length > 1) {
     index = particion(items, izquierda, derecha);

     if(izquierda < index - 1){
        quickSort(items, izquierda, index - 1);
     }

     if (index < derecha) {
       quickSort(items, index, derecha);
     }
  }

  return items;

}

var a = [5, 49, 2, 10, 3, 95, 7]

var result = quickSort(a, 0, a.length - 1)

console.log(result)
