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
