/**
 * Mixin
 */

// Mixing object

let mixin = {
    greet(){
        console.log(`Hola!, ${this.name}`)
    },
    sayBye(){
        console.log(`Chau!, ${this.name}`)
    }
};

class User {
    constructor(name){
        this.name = name;
    }
}


/**
 * - Warning! -
 * User instances will still be User instances after this upgrading.
 */
Object.assign(User.prototype, mixin);

// Logging
const user = new User('Santi');
user.greet()