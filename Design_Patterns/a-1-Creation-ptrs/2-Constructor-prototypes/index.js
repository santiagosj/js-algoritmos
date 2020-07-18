/**
  * Constructor pattern with prototypes
  */

/**
  * ECMAScript 6
  */
 class SomeClass{
     constructor(propOne, propTwo){
         this.propertyOne = propOne;
         this.propertyTwo = propTwo
     }

     someMethod(){
         console.log(`This method logs propertyOne: ${this.propertyOne} and propertyTwo: ${this.propertyTwo}`)
     }
 }

 const instanceOfSomeClass = new SomeClass('Prop 1', 'Prop 2')
 instanceOfSomeClass.someMethod()