//ORDINAMIENTO "SHELL SORT"
/*
El algoritmo divide en brechas iguales el array y compara los distintos puntos de esta por ejemplo:

a = 5, 10, 40, 2, 7, 15, 23, 38, 41, 9, 3

5, 10, 40, 2, 7,
15,23, 38, 41,9,
3,

1-primer ciclo con brecha de valor 5 ordena las columnas y obtenemos:

3,10, 38, 2, 7,
5,23, 40,41, 9
15,

devuelve: 3, 10, 38, 2, 7, 5, 23, 40, 41, 9, 15

2- segundo ciclo con brecha de valor 3

3, 10, 38,
2, 7,  5,
23,40, 41
9, 15

oredena por columna:

2, 7, 5
3, 10,38
9, 15,41
23 40

devuelve:2, 7, 5, 3, 10, 38, 9, 15, 41, 23,40

3- tercer ciclo ordena en columnas con un valor de brecha 1 que es equivalente a un ordenamiento por insercion simple

*/
function shellSort (a) {
    for (var h = a.length; h > 0; h = parseInt(h / 2)) {
        for (var i = h; i < a.length; i++) {
            var k = a[i];
            for (var j = i; j >= h && k < a[j - h]; j -= h)
                 a[j] = a[j - h];
                 a[j] = k;
        }
    }
    return a;
}

var a = [5, 10, 40, 2, 7, 15, 23, 38, 41, 9, 3]

shellSort(a)

console.log(a)
