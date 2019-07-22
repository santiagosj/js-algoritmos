//EJEMPLOS POO CON DUMMY DATA EN JS PARA REPASAR LOS CONCEPTOS PRINCIPALES DE HERENCIA, ENCAPSULAMIENTO, POLIMORFISMO Y ABSTRACCION
//simple objeto con dos propiedades.
let dog = {
  name:'Willy',
  numLegs:4
};
//para acceder al objeto se utiliza notacion de punto así:
console.log(dog.name)

//se pueden crear metodos en objetos para darle comportamiento:
let alien = {
  name:'Alf',
  numLegs:2,
  saludo: () => console.log("No hay problemaa! soy " + alien.name + ' Volví en forma de objeto js')
}
alien.saludo()
//se puede hacer el codigo un poco mas reusable con la palabra clave "this":
function SouthParkCaracter(name) {
  this.name = name;
  this.hdp = () => console.log("Mataron a " + this.name + " hijos de P###!!!");
}

let stan = new SouthParkCaracter('Kenny')
stan.hdp()
//El constructor es una funcion que crea nuevos objetos define las propiedades y el comportamiento que van a pertencer al nuevo objeto
//esta manera es muy básica y presenta el problema de que va a transmitir por herencia sus atributos a los nuevos objetos.
function Person(){
  this.name = 'Peter';
  this.lastName = 'Greefin';
  this.age = 45;
}

//para crear una instancia del objeto hacemos lo siguiente:
let personaNueva = new Person();
//personaNueva podria llamarse en este caso let peter...porque hereda las propiedades de Person

//extendiendo el constructor para que reciba parametros:
function Personaje(name, lastName){
  this.name = name;
  this.lastName = lastName;
  this.age = 32
}
//instancia del objeto constructor Personaje()
let southParkPersonaje =  new Personaje('Randy','Marsh')
//para verificar la instancia del objeto podemos usar instanceof
southParkPersonaje instanceof Personaje //return true

//ownProperty
//name y numLegs son ownPrperties porque estan definidas directamente en el objeto padre (constructor)

function Bird(name){
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");

let ownProps = [];
//recorremos con un loop el objeto y hacemos el push a la lista vacia que va a contener las propiedades del objeto.

for (let property in duck){
  if(duck.hasOwnProperty(property)){
    ownProps.push(property);
  }
}

console.log(ownProps)

//Prototype
//lo mas conveniente es dejar de duplicar codigo...asi que vamos a usar prototype, que es un objeto compartido a travez de todas las instancias del objeto
function Dog(name){
  this.name=name;
}
Dog.prototype.numLegs = 4
//todas las instancias del objeto Dog van a heredar la propiedad numLegs = 4

//para iterar por todas las propiedades y agregar las propiedades de la nueva instancia a ownProps y los prototypes de Dog a prototypeProps hacemos lo siguiente:
//suponinedo que tengo una instancia del objeto Dog :

let marcaPerro = new Dog('Cacho')

let prototypeProps = [];

for(let property in marcaPerro){
  if(marcaPerro.hasOwnProperty(property)){
      ownProps.push(property)
  } else {
    prototypeProps.push(property)
  }
}

console.log(prototypeProps)
//la propiedad constructor...para comprobar si, en efecto, un objeto es instancia del constructor se puede hacer algo asi...

function PoliticamenteIncorrecto(name, serie){
  this.name = name;
  this.serie = serie;
  this.saludar =() => console.log('Hola soy ' + this.name + ' y pertenezco a ' + this.serie )
}
//instancias de PoliticamenteIncorrecto
let randy = new PoliticamenteIncorrecto('Randy', 'South Park' )
let peter = new PoliticamenteIncorrecto('Peter', 'Familly Guy')
let rick = new PoliticamenteIncorrecto('Rick', 'Rick and Morty')

rick.saludar()

function joinThePIClub( candidato ){
  if(candidato.constructor === PoliticamenteIncorrecto){
    return true
  } else {
    return false
  }
}

// function joinThePIClub( candidato ){
//    candidato.constructor instanceof PoliticamenteIncorrecto ? true :  false
// }

//Se puede modificar el constructor PoliticamenteIncorrecto de la siguiente manera para no hacerlo como en la linea 69 lo cual a gran escala significaria a pain in the ass..particularmente esta manera permite hacer multiples modificaciones al objeto..
//es importante definir el constructor..para que por ejemplo console.log(rick.constructor) no imprima undefined
PoliticamenteIncorrecto.prototype = {
  constructor:PoliticamenteIncorrecto
}
console.log(PoliticamenteIncorrecto.prototype)
//para entender un poco mejor la relacion entre una instancia y un constructor pordemos usar el metodo isPrototypeOf like so:
//returns true
//incluso llendo hacia arriba en la cadena de herencia.

console.log(typeof PoliticamenteIncorrecto.prototype) // returns Object, entonces..

Object.prototype.isPrototypeOf(PoliticamenteIncorrecto.prototype)
//returns true
//utilizando herencia para no repetir codigo

function Animal(){
    Animal.prototype.comer = ()=>console.log('ñam ñam ñam')
 }

Animal.prototype = {
  constructor:Animal,
}

let bulldog = new Animal();

bulldog.comer()
