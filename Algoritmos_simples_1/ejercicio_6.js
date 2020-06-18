//suma diagonales de una matriz de [n x n] y las resta HackerRank challege 
function diagonalDifference(arr) {
   
     let sum1 = 0, sum2 = 0;

  for(let i = 0, j = arr.length - 1; i < arr.length; i++, j--){
    sum1 += arr[i][i];
    sum2 += arr[i][j];
  } 
         
    return Math.abs(sum1 - sum2);
}