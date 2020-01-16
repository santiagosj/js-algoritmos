//Modelo
var model = {
    gatoActual:null, 
    gatos:[
      {
        gatoCuenta:0,
        gatoImagen:'../assets/felix.gif',
        gatoNombre:'Felix'
      },
      {
        gatoCuenta:0,
        gatoImagen:'../assets/garfield.gif',
        gatoNombre:'Garfield'
      },
      {
        gatoCuenta:0,
        gatoImagen:'../assets/heatcliff.gif',
        gatoNombre:'Heatcliff'
      },
      {
        gatoCuenta:0,
        gatoImagen:'../assets/neo.gif',
        gatoNombre:'Neo-dejavú'
      },
      {
        gatoCuenta:0,
        gatoImagen:'../assets/oldCat.gif',
        gatoNombre:'El Brian'
      },
      {
        gatoCuenta:0,
        gatoImagen:'../assets/stimpy.gif',
        gatoNombre:'Stimpy'
      },
      {
        gatoCuenta:0,
        gatoImagen:'../assets/tom.gif',
        gatoNombre:'Tom'
      },
   ] 
}

//Controlador

var controlador = {

    init:function(){
        model.gatoActual = model.gatos[0];
        gatoContenedorVista.init()
        gatoListaVista.init()
    },

    getGatoActual:function(){
        return model.gatoActual
    },

    getGatos:function(){
        return model.gatos
    },

    setGatoActual:function(gato){
        model.gatoActual = gato
    },

    incrementarCuenta:function(){
        model.gatoActual.gatoCuenta++;
        gatoContenedorVista.render()
    }
    
}



//Vistas
var gatoContenedorVista = {
   //function init para iniciar los valores de la vista-1
   init:function(){
       this.gatoContenedorElem = document.getElementById("gato-contenedor")
       this.gatoNombreElem = document.getElementById("gato-nombre")
       this.gatoImgElem = document.getElementById("gato-img")
       this.gatoCuentaElem = document.getElementById("gato-cuenta")

       this.gatoImgElem.addEventListener('click', function(){
           controlador.incrementarCuenta()
       })

       this.render()
   },

   render:function(){
       var gatoActual = controlador.getGatoActual()
       this.gatoCuentaElem.textContent = gatoActual.gatoCuenta;
       this.gatoNombreElem.textContent = gatoActual.gatoNombre;
       this.gatoImgElem.src = gatoActual.gatoImagen;
   }
}

var gatoListaVista = {
     
    init:function(){

         this.gatoListaElem = document.getElementById("gato-lista")
        
         this.render()
     },

     render:function(){

         var elem;

         var gatos = controlador.getGatos()

         this.gatoListaElem.innerHTML = ''

         for(let gato of gatos){

              elem = document.createElement('li');
             
             elem.textContent = gato.gatoNombre

             elem.addEventListener('click',(function(gatoCopia){
                return function(){
                    controlador.setGatoActual(gatoCopia);
                    gatoContenedorVista.render();
                }
             })(gato));
            
             this.gatoListaElem.appendChild(elem)
         }

     }

}

controlador.init()