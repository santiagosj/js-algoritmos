//ORDINAMIENTO "SHELL SORT"

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

var a = [5,10,40,2,7,15,23,38,41,9,3]
shellSort(a)
console.log(a)
