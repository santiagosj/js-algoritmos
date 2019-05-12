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
         console.log(this.name + ': Mataron a Kenny! hijos de #$%&#!')
    }
  };
  this.saludo = () => {
    switch (this.name){
      case 'Stan':
         console.log(this.name + ': ...estoy en una computadora otra vez!?')
         return false
      case 'Eric':
         console.log(this.name + ': ME ##### EN LOS HIPPIES!')
         return false
      case 'Kyle':
         console.log(this.name + ': Creo que hoy aprendimos algo valioso...')
         return false
      break
      default:
        console.log(this.name + ': mmokay?')
    }
  }
}

SouthParkCaracter.prototype = {
  constructor:SouthParkCaracter
}

let stan = new SouthParkCaracter('Stan')
//modificando los datos heredado de la clase padre directamente
stan.kenny = 1;
//llamando metodos
stan.hdp()
stan.saludo()

let eric = new SouthParkCaracter('Eric')
eric.saludo()

let kyle = new SouthParkCaracter('Kyle')
kyle.saludo()
kyle.hdp()

let mr_maki = new SouthParkCaracter('Mr.Maky')
mr_maki.saludo()

console.log(stan instanceof SouthParkCaracter)
console.log(typeof eric)
console.log(kyle)
console.log(stan)


/*CONTADOR DE CARTAS*/

function Zapato(){
  this.card = [
     {
       cartasPositivas:[2,3,4,5,6]
     },
     {
       cartasNeutras:[7,8,9]
     },
     {
       cartasNegativas:[10,'J','Q','K','A']
     }
   ]
}

Zapato.prototype = {
  constructor:Zapato
}

let carta = new Zapato()

console.log(carta.card[0].cartasPositivas[2])
console.log(carta.card[1].cartasNeutras[1])
console.log(carta.card[2].cartasNegativas[1])
console.log(carta.card[0])
console.log(carta.card[1])
console.log(carta.card[2])

function Contador(mano){
  this.mano = mano
}
