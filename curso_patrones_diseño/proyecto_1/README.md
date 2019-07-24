# Requerimientos
1-Generar un contador que al hacer click sobre la imagen cuente la cantidad de clicks:
    ``` 
       const felix = document.getElementById("felix");
       
       let counter = 0;

       felix.addEventListener('click' ,function(){
          document.getElementById('counter').innerHTML= `You clicked me ${counter += 1} times.`
       })
    ```
    
 Este código tiene la imagen puesta directamente en el archivo index.html
