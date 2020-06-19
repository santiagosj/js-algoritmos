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
//escalera de sostenidos 1
function escaleraDeSostenidos(altura){
  for(let i = 1; i <= altura; i++){
      let escalon = ''
      for(let j = 1;j <= altura - i; j++){
          escalon += ' ' 
      }

      for(let j = 1; j < i + 1; j++){
         escalon += '#' 
      }
     console.log(escalon)
  }
}

//escalera de sostenidos 2 padStart

function escaleraDeSostenidos2(altura){
  for(let i = 0;i < altura; i++ ){
     let escalon = '#'.padStart(altura - i, ' ').concat(''.padStart(i,'#'))
     console.log(escalon)
  }
}