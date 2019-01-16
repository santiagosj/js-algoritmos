//ORDENAMIENTO POR SELECCION DIRECTA

/*
1-busca le valor minimo de la lista;
2-intercambia con el primero;
3-busca el siguiente valor minimo;
4-lo intercambia con el segundo;

para i=0 hasta n-1
    mínimo = i;
    para j=i+1 hasta n
        si lista[j] < lista[mínimo] entonces
            mínimo = j // (!)
        fin si
    fin para
    intercambiar(lista[i], lista[mínimo])
fin para
*/

function selectionSort(nums) {
  var len = nums.length;
  for(var i = 0; i < len; i++) {
    var minAt = i;
    for(var j = i + 1; j < len; j++) {
      if(nums[j] < nums[minAt])
        minAt = j;
    }

    if(minAt != i) {
      var temp = nums[i];
      nums[i] = nums[minAt];
      nums[minAt] = temp;
    }
  }
  return nums;
}

var a = [-2, 9, 23, 12, 68, 5, 3, 10];

selectionSort(a)

console.log(a);
