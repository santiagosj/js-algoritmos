/**
 * Constructor pattern
 */
 /**
 * ECMAScript 5
 */
 function SomeClass(){
     this.property = 0;
     this.method = function(){
         console.log(`This method prints the property: - ${this.property} - of SomeClass`)
     }
 }

 // Creating an instance
 var instanceOne = new SomeClass();
 instanceOne.method()

/**
 * ECMAScript 6
 */

 class AnotherClass {
     constructor(prop){
         this.property = prop;
         this.method = () => {
            console.log(`This method prints the property: - ${this.property} - of AnotherClass`)
         }
     }
 }

 const instanceTwo = new AnotherClass(3)
 instanceTwo.method()