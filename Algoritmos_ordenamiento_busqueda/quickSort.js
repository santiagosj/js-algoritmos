//QUICK SORT

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

function quickSort(items, izquierda, derecha){
  var index;

  if(items.length > 1){
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
