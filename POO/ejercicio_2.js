//APLICANDO POO

function PoliticamenteIncorrecto(name, serie){
  this.name = name;
  this.serie = serie;
  this.saludar = () => console.log('Hola soy ' + this.name + ' de ' + this.serie)
}

PoliticamenteIncorrecto.prototype = {
  constructor:PoliticamenteIncorrecto
}

let rick = new PoliticamenteIncorrecto('Rick Sanchez','Rick and Morty')
let randy = new PoliticamenteIncorrecto('Randy Marsh', 'South Park')

rick.saludar()
randy.saludar()



function SouthParkCaracter(name){
  this.name = name;
  this.kenny = Math.floor(Math.random() * Math.floor(3));
  this.hdp = () => {
    if (this.kenny > 0) {
         console.log('Mataron a Kenny! hijos de Puta!')
    }
  };
  this.saludo = () => {
    switch (this.name) {
      case 'Stan':
         console.log('Mierda...estoy en una computadora otra vez!?')
         return false
      case 'Eric':
         console.log('ME CAGO EN LOS HIPPIES!')
         return false
      case 'Kyle':
         console.log('Creo que hoy aprendimos algo valioso...')
         return false
      break
      default:
        console.log('mmm ok?')
    }
  }
}

SouthParkCaracter.prototype = {
  constructor:SouthParkCaracter
}

let stan = new SouthParkCaracter('Stan')
stan.hdp()
stan.saludo()

let eric = new SouthParkCaracter('Eric')
eric.saludo()

let kyle = new SouthParkCaracter('Kyle')
kyle.saludo()
kyle.hdp()

console.log(stan instanceof SouthParkCaracter)
console.log(typeof eric)
console.log(kyle)
console.log(stan)
