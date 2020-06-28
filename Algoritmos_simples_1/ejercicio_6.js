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

//===========================================================================
//suma maxima y suma minima
function miniMaxSum(arr) {

  arr.sort((a,b)=>{
    return a - b
  })
  
  let max = Math.max(...arr), 
  min = Math.min(...arr)

  let maxSum = arr.filter(v => v !== min).reduce((a, b)=>{return a + b}),
  minSum = arr.filter(v => v !== max).reduce((a, b)=>{return a + b})

  return Array.of(minSum, maxSum).join(' ')

}

//==========================================================================
// My solution

function repeatedString(s, n){
   const counta = (str) => (str.match(/a/g) || [] ).length 
   return counta(s) * (parseInt(n / s.length)) + counta(s.substr(0, n % s.length));
}
//==========================================================================

/*function repeatedString(s, n) {
  const counta = (str) => str.split('')
    .filter(c => c == 'a')
    .length
  
  const d = Math.floor(n / s.length)
  const r = n - (s.length * d)
  return d * counta(s) + counta(s.substr(0, r))
}*/

//==========================================================================

/*const repeatedString = (s, n) => {
  const countA = s => s.split('a').length - 1;

  let len = s.length;
  let reps = Math.floor(n / len);
  let remainder = s.slice(0, n % len);

  return reps * countA(s) + countA(remainder);
};*/

//=========================================================================

/*function repeatedString(s, n) {

  countAs = (s, index) => {
    let count = 0;
    while (index >= 0) {
        if (s[index] == 'a') count++;
        index--;
    }
    return count;
  };
  if (n <= s.length) {
    return countAs(s, n - 1);
  } else { 
    const parts = Math.floor(n / s.length);
    const rest = n % s.length;
    return countAs(s, s.length - 1) * parts + countAs(s, rest - 1);
  }
}*/

//==================================================================

/*function repeatedString(s, n) {
  const count = (s) => s.replace(/[^a]/g, '').length;
  return count(s) * (parseInt(n / s.length)) +
  count(s.substr(0, n % s.length));
}*/

//==================================================================

/*function filterAs(arr) {
  let result = 0;

  for (let letter of arr) {
      if (letter === 'a') {
          result++
      }
  }

  return result
}

function repeatedString(s, n) {
  const lengthString = s.length
  const numberDivision = Math.floor(n / lengthString)  
  const numberOfAs = filterAs(s)
  const remainder = n - (numberDivision * lengthString)

  if (remainder === 0) {
      return numberDivision * numberOfAs
  }

  let moreAs = filterAs(s.substring(0, remainder))

  return numberDivision * numberOfAs + moreAs
}*/

//===================================================================