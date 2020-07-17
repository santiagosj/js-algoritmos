function createDivs(elements){  
     
  this.elements = [...elements]
 
 for(let i = 0; i < elements.length; i++ ){

     let cuenta = 0

     let div = document.createElement("div");

     div.setAttribute("id", elements[i]);

     document.body.appendChild(div);

     let p = document.createElement("p")

     p.setAttribute("id", elements[i] + "some") 


     for(let j = 0; j < 2; j++){
       
         let btn = document.createElement("button")

         btn.setAttribute("id", j % 2 === 0  ? "btn-suma-" + elements[i] : "btn-resta-" + elements[i])

         btn.innerHTML = j % 2 === 0 ? elements[i].slice(0,-3) + " +" : elements[i].slice(0,-3) + " -" 

         div.appendChild(btn)          

     }

     div.appendChild(p) 

     let displayCuenta = document.getElementById(elements[i] + "-res" )

     let btnSuma = document.getElementById("btn-suma-" + elements[i])

     let btnResta = document.getElementById("btn-resta-" + elements[i])

     displayCuenta.textContent = 0

     btnSuma.addEventListener('click', e => {

        displayCuenta.textContent = cuenta += 1
        
     },false)
     
     btnResta.addEventListener('click', () => {

        if( cuenta === 0 ){

            return

         } else {

           displayCuenta.textContent = cuenta -= 1

         }
        
     },false)

  }
 
}

//Timer

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 60 * 5,
      display = document.querySelector('#time');
  startTimer(fiveMinutes, display);
};