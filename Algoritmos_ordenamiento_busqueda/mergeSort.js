//MERGE SORT O ORDENAMIENTO POR MEZCLA

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
