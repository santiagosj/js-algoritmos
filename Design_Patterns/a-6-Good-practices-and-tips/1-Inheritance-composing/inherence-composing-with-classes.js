/**
 * Inheritance Composing
 */

const methods = require('./methods');

class Person {
    constructor(){
        this.name = 'Santi'
    }

    greet(){
        methods.greet(this.name)
    }

    breath(){
        methods.breath(this.name)
    }
}

class Nexus {
    constructor(){
        this.name = 'Willy'
    }

    greet(){
        methods.greet()
    }
}

/**
 * - Warning! -
 * Classes (Person and Nexus) have custom methods now.
 */

 const p = new Person()
 p.greet()
 p.breath()

 const n = new Nexus()
 n.greet()
