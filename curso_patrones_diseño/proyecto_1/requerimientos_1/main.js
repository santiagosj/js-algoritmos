const felix = document.getElementById("felix");
       
let counter = 0;

felix.addEventListener('click' ,function(){
   document.getElementById('counter').innerHTML= `You clicked me ${counter += 1} times.`
})