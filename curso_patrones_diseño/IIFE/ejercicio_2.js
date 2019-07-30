const button = document.getElementById("button")
const text = document.getElementById("demo")

button.addEventListener('click',(function(){
     let count = 0;

     return function(){

         count += 1;

         if(count % 2 === 0){

             text.innerHTML=`${count}`;
             
         }
     }
})())