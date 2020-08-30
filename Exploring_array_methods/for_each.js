 /**
 * array.forEach( (value,index,array) => {...}, thisArg)
 */

//basic example.

['a','b','c','d'].forEach((item,index)=>{
    console.log(item,index)
})

/*
 * a 0
 * b 1
 * c 2
 * d 3
 */

 const items = [
     {id:'🍔' ,name:'Super Burger', price:399},
     {id: '🍟',name:'Jumbo Fries',price:199},
     {id:'🍺', name:'Beer', price:299}
 ]

 const app = document.querySelector('#app');

 items.forEach(item => {
     app.innerHTML += `
       <li>
          ${item.id} ${item.name} - ${(item.price / 100).toFixed(2)}
       </li>
     `
 })