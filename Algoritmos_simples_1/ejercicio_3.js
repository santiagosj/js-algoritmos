//un poco de estructuras de datos simples

function mixedNumbers(arr) {
    arr.unshift("I", 2, "three")
    arr.push(7, "VIII", 9)
      return arr;
    }
    
    console.log(mixedNumbers(['IV', 5, 'six']));

//==========================================================
function popShift(arr) {
    let popped = arr.pop(arr[1]); 
    let shifted = arr.shift(arr[2]); 
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));
  //=======================================================
  function sumOfTen(arr) {
    
    arr.splice(2, 2)
    
    return arr.reduce((a, b) => a + b);
  }
  
  console.log( sumOfTen([2, 5, 1, 5, 2, 1]) );
  //sin splice return 16 
//==========================================================
function htmlColorNames(arr) {
    
    arr.splice(0, 2, "DarkSalmon","BlanchedAlmond")
   
    return arr;
  } 
   
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));

//==========================================================

function forecast(arr) {
    return arr.slice(2,4);
  }
  
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

  //==========================================================
  //copiando array tantas veces dependiendo del parametro
  function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
    
      newArr.push([...arr])

      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));

  //===================================================================

  function spreadOut() {
 
     let fragment = ['to', 'code'];
 
     let sentence = ['learning',...fragment,'is','fun']; 

     return sentence;

  }

  console.log(spreadOut());
//===================================================================
function quickCheck(arr, elem) {

    if (arr.indexOf(elem) > 0){

      return true

    }else{

      return false

    }

   }
  
   console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

   //===============================================================

   function filteredArray(arr, elem) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
            if( arr[i].indexOf(elem) === -1){
               newArr.push(arr[i])  
            }
     }
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

  //=================================================================
  //agregar data a un objeto

  const listaVerduleria = {
     cebollas:'1kg',
     bananas:'2kg',
     papas:'2kg',
     dietetica:{
       frutosSecos:'200g',
       cereales:'300g'
     }
  }

  listaVerduleria.tomates = '1kg'
  listaVerduleria.zanahorias = '1/2 kg'
  listaVerduleria.espinaca = '3kg'
  listaVerduleria.dietetica.frutosSecos = '150g'
  listaVerduleria.dietetica.salsaSoja = 1

  delete listaVerduleria.bananas

  const listChek = (itemSeleccionado) => {
    let  inventario = listaVerduleria[itemSeleccionado]
    return inventario;
  }

  console.log(listChek('cebollas'))
//======================================================================
let usuarios = {
  Eric: {
    age: 7,
    online: true
  },
  Kyle: {
    age: 7,
    online: false
  },
  Stan: {
    age: 8,
    online: true
  },
  Kenny: {
    age: 7,
    online: false
  },
  Bothers: {
    age: 6,
    online: false
  }
};
//tiene el objeto usuario, usuarios
function isEveryoneHere(obj) {

   var count=0;

for(const user in obj){
   
    if(obj.hasOwnProperty(user)) {

       count++

       return true;

    }else{

      return false

    }

  }
  return count;
}

console.log(isEveryoneHere(usuarios));

//cuantos usuarios hay en linea

function countOnline(obj) {
  
     let count = 0;

    for(let user in obj){

      if(obj[user]['online'] === true){

        count++

      }

    }
    return count;
  
}

console.log(countOnline(usuarios));

//array de los usuarios 
function getArrayOfUsers(obj) {

  let arrOfUsers = [];
 
  for(let user in obj){

    arrOfUsers.push(user)

  }

  return arrOfUsers
  
 }
 
 console.log(getArrayOfUsers(users));

 //agregando propiedades a un array en un objeto

 let usuario = {
  name: 'Kenny',
  age: 28,
  data: {
    username: 'Kenny_33_Misterion',
    joinDate: 'Marzo 26, 2016',
    organization: 'South park Friends',
    friends: [
      'Stan',
      'Kyle',
      'Eric'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
 
  userObj.data.friends.push(friend)
  
  return userObj.data.friends
}

console.log(addFriend(usuario, 'Bothers'));

//=============================================================================