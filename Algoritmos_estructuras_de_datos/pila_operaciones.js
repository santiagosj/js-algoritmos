//implementacion de una pila con un arrray

class Pila {
  constructor(){
    this.pila=[]
  }

 agregarElemento(elemento) {
   this.pila.push(elemento)
   return this.pila
 }

 sacarElemento(){
   return this.pila.pop()
 }

 ultimoElemento(){
   return this.pila[this.pila.length - 1]
 }

 tamañoPila(){
   return this.pila.length
 }

 imprimir(){
   console.log(this.pila)
 }

}

let pila = new Pila;

console.log(pila.tamañoPila())//0
console.log(pila.agregarElemento("elemento_1"))
console.log(pila.agregarElemento("elemento_2"))
console.log(pila.tamañoPila())//2
pila.imprimir()
console.log(pila.ultimoElemento())//elemento_2
console.log(pila.sacarElemento())//saca elemento_2
console.log(pila.tamañoPila())//1
pila.imprimir()//elemnto_1
