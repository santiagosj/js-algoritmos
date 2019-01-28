//implementacion de una cola utilizando un array

class Cola {
  constructor(){
    this.cola = [];
  }

  agregarElemento(elemento){
    this.cola.push(elemento)
    return this.cola
  }

  sacarElemento(){
     return this.cola.shift()
  }

  ultimoElemento(){
    return this.cola[0]
  }

  tamañoCola(){
    return this.cola.length
  }

  colaVacia(){
    return this.cola.length === 0;
  }

  imprimirCola(){
    return this.cola
  }
}

let cola = new Cola();

console.log(cola.agregarElemento("elemento_1"))
console.log(cola.agregarElemento("elemento_2"))
console.log(cola.agregarElemento("elemento_3"))
console.log(cola.sacarElemento())
console.log(cola.ultimoElemento())
console.log(cola.colaVacia())
console.log(cola.imprimirCola())
