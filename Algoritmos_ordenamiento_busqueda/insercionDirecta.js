//ORDENAMIENTO POR INSERCION DIRECTA
/*
1-si el valor del primer item es mayor que el valor del segundo, elimina el segundo item.
2-el primer item ocupa el puesto libre del segundo item.
3-el item eliminado anteriormente ocupa el primer lugar.

pseudocodigo:

========================================================================

programa insercionDirecta(vector a[entero n])

Inicio

     para entero i = 0; i < long(a); i++ hacer

          entero k = a[i]

          para entero j = i; j > 0 && k < a[j - 1]; j-- hacer

               a[j] = a[j - 1];

               a[j] = k;

          fin para

      fin para

   devolver a

fin

*/
function insertionSort (a) {

    for (var i = 0; i < a.length; i++) {

        var k = a[i];

        for (var j = i; j > 0 && k < a[j - 1]; j--)
              a[j] = a[j - 1];
              a[j] = k;

    }

    return a;
}

var a = [4, 65, 2, -31, 0, 99, 83, 782, 1];

insertionSort(a);

console.log(a)
