//EJEMPLOS POO CON DUMMY DATA EN JS PARA ENTENDER LOS CONCEPROS PRINCIPALES DE HERENCIA, ENCAPSULAMIENTO, POLIMORFISMO Y ABSTRACCION
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
  saludo: () => console.log("No hay problemaa!")
}

//se puede hacer el codigo un poco mas reusable con la palabra clave "this":
let southParkCaracter = {
  name:'Kenny',
  hdp: () =>  "Mataron a " + this.name + " hijos de P###!!!"
}
//El constructor es una funcion que crea nuevos objetos define las propiedades y el comportamiento que van a pertencer al nuevo objeto
//esta manera es muy basica y presenta el problema de que va a transmitir por herencia sus atributos a los nuevos objetos.
function Person(){
  this.name = 'Peter',
  this.lastName = 'Greefin',
  this.age = 45
}

//para crear una instancia del objeto hacemos lo siguiente:
let personaNueva = new Person();

//extendiendo el constructor para que reciba parametros:
function Personaje(name, lastName){
  this.name = name,
  this.lastName = lastName,
  this.age = 32
}
//instancia del objeto constructor Personaje()
let southParkPersonaje =  new Personaje('Randy','Marsh')
//para verificar la instancia del objeto podemos usar instanceof
southParkPersonaje instanceof Personaje //return true

//ownProperty
//name y numLegs son ownPrperties porque estan definidas directamente en la instancia del objeto padre

function Bird(name){
  this.name = name,
  this.numLegs = 2
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
