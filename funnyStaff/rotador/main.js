function addBtnGrid(){
   
    var count = 1;
     
    var grid = document.getElementById("grid")

    var div = document.createElement('div');
   
    grid.appendChild(div);
   
    div.setAttribute('id','btns');
   
    for(let i = 0;i < 9;i++){
           
          var btn = document.createElement('button');
   
          div.appendChild(btn); 
           
          btn.innerHTML=count++;
          
          var n = (count - 1).toString()
   
          btn.setAttribute('id','btn'+ n);

          btn.classList.add("lgreen")
          
       }
   
    var btn5 = document.getElementById('btn5')
   
    btn5.onclick = ()=>{
               var aux = btn1.innerHTML;
               btn1.innerHTML = btn4.innerHTML;
               btn4.innerHTML = btn7.innerHTML;
               btn7.innerHTML = btn8.innerHTML;
               btn8.innerHTML = btn9.innerHTML;
               btn9.innerHTML = btn6.innerHTML;
               btn6.innerHTML = btn3.innerHTML;
               btn3.innerHTML = btn2.innerHTML;
               btn2.innerHTML = aux;
           }
   }  

   addBtnGrid();