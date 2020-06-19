//suma diagonales de una matriz de [n x n] y las resta HackerRank challege 
function diagonalDifference(arr) {
   
     let sum1 = 0, sum2 = 0;

  for(let i = 0, j = arr.length - 1; i < arr.length; i++, j--){
    sum1 += arr[i][i];
    sum2 += arr[i][j];
  } 
         
    return Math.abs(sum1 - sum2);
}

//funcion que recibe un array de enteros, y separa los enteros positivos de los negativos y los ceros.. 
//luego expresa en decimal lo que cada grupo representa en fracciones dentro del array

function plusMinus(arr) {

  let neg = arr.filter(v => Math.sign(v) === -1) ,
   
  pos = arr.filter(v => Math.sign(v) === 1),

  zero = arr.filter(v => Math.sign(v) === 0) ;

  let resNeg = neg.length / arr.length,

  resPos = pos.length / arr.length,

  resZ = zero.length / arr.length;  

  console.table(resPos.toFixed(6))
  console.table(resNeg.toFixed(6))
  console.table(resZ.toFixed(6)) 

}