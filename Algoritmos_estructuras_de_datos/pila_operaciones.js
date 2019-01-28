//implementacion de una pila utilizando un arrray

class Pila_1 {
  constructor(){
    this.pila_1=[]
  }

 agregarElemento(elemento) {
   this.pila_1.push(elemento)
   return this.pila_1
 }

 sacarElemento(){
   return this.pila_1.pop()
 }

 ultimoElemento(){
   return this.pila_1[this.pila_1.length - 1]
 }

 tamañoPila(){
   return this.pila_1.length
 }

 imprimir(){
   console.log(this.pila_1)
 }

}

let pilaEnArray = new Pila_1;

console.log(pilaEnArray.tamañoPila())//0
console.log(pilaEnArray.agregarElemento("elemento_1"))
console.log(pilaEnArray.agregarElemento("elemento_2"))
console.log(pilaEnArray.tamañoPila())//2
pilaEnArray.imprimir()
console.log(pilaEnArray.ultimoElemento())//elemento_2
console.log(pilaEnArray.sacarElemento())//saca elemento_2
console.log(pilaEnArray.tamañoPila())//1
pilaEnArray.imprimir()//elemnto_1


//implementacion de una pila utilizando un objeto

class Pila_2 {
  constructor() {
    this.pila_2 = {};
    this.contador = 0;
  }
//al implementar la estructura en un objeto los metodos inherentes al Array.prototype no estan, por lo tanto es necesario aplicarlos de manera manual
  agregarElemento_2(elemento) {
    this.pila_2[this.contador] = elemento;
    this.contador++;
    return this.pila_2;
  }

  sacarElemento_2(){
    this.contador--;
    const elemento = this.pila_2[this.contador];
    delete this.pila_2[this.contador]
    return elemento;
  }
//estos metodos se aplican casi de la misma manera que en un array
  ultimoElemento_2() {
    return this.pila_2[this.contador - 1]
  }

  tamañoPila_2(){
    return this.contador;
  }

  imprimir_2(){
    console.log(this.pila_2)
  }

}

let pilaEnObjeto = new Pila_2

console.log(pilaEnObjeto.agregarElemento_2("elemento_1"))
console.log(pilaEnObjeto.tamañoPila_2())
console.log(pilaEnObjeto.agregarElemento_2("elemento_2"))
pilaEnObjeto.imprimir_2()
console.log(pilaEnObjeto.sacarElemento_2())
console.log(pilaEnObjeto.tamañoPila_2())
pilaEnObjeto.imprimir_2()
