/**
  * Constructor pattern with prototypes
  */

/**
  * Adding a new method to Object prototype
  */

  Object.prototype.log = function(){
      /**
     * - Cuidado! -
     * 
     * Tener en cuenta no usar funciones de flecha acá
     * porque no cuentan con contexto 'this'.
     * 
     */
     console.log(this)
  }

  const x = {a:7};
  x.log()

  if(!String.prototype.trim){
     /**
      * - Warning! -
      * Old browsers do not have this method.         
      */
      String.prototype.trim = function(){
          try{
              return this.replace(/^\s+|\s+$/g, "")
          }catch(error){
              return this
          }
      }
  }

  const y = "      Hello, World!      ".trim();
  
  y.log();