/**
 * Inheritance Composing
 */

const methods = require('./methods');

const person = {
       /**
         * - Warning! -
         * Mind not to use arrow functions in here.
         * Arrow functions do not have this context.
         */

    name: 'Santi',
        
    greet: function(){
      methods.greet(this.name)
    },

    breath: function() {
      methods.breath(this.name);
    }
};

const nexus = {
    /**
   * - Warning! -
   * Mind not to use arrow functions in here.
   * Arrow functions do not have this context.
   */

   name:'Name',

   greet:function(){
       methods.greet(this.name);
   }
};


/**
 * - Warning! -
 * Objects (person and nexus) have custom methods now.
 */