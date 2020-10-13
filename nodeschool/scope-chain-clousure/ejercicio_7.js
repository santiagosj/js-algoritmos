// HOISTING BASIC EXAMPLES.
// functions declariation are scanned and made available
// Variable declarations are scanned and made undefined

/**
 * la funcione se ejecuta normalmente debido a que el contexto global la detecta y la declara disponible
 */
tipper("40")
function tipper(a){
    var billete = parseInt(a)
    console.log(billete + 5)
}

/*
*Tira error debido a que el contexto global detecta la variable y la declara como undefined
*/

tipperTwo("200")
var tipperTwo = function(a){
    var billete = parseInt(a)
    console.log(billete + 10)
}

// tipperTwo("200")

console.log(name) // logs undefined, not an error. If var name does not exist throw an error.
var name = 'Tito'

function logName(){
    var name = 'Puente'
    console.log(name)
}

logName() // "Puente"
console.log(name) // "Tito"


