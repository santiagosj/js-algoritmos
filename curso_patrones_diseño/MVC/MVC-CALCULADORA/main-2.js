console.log('documento cargado')

//Modelo - data
/**
 * 1-Inputs values <- tomar valores
 * 2-Definir el tipo de button y su accion asociada
 *   |-Operadores
 *      |-[sumar, restar, multiplicar, dividir]
 *   |-Numero
 *   |-Calcular
 *   |-Borrar
 * 
 */

class Model {
    
    constructor() {
       
      // result 
      // keyType
    }
    //metodos...
    // 1 - calcular
    calcular(n1, operador, n2){
          const primerNum = parseFloat(n1)
          const segundoNum = parseFloat(n2)
          if (operador === 'sumar') return primerNum + segundoNum
          if (operador === 'restar') return primerNum - segundoNum
          if (operador === 'multiplicar') return primerNum * segundoNum
          if (operador === 'dividir') return primerNum / segundoNum
    }
   
    /**
     * 
     * @param {*} key 
     * 
     * obtiene el tipo de tecla
     * 
     */
     getKeyType(key){
        const { action } = key.dataset
       // if (!action && key.type !== 'text') return 'numero'
        if (!action && key.type === 'text') return 'input'
        if (
          action === 'sumar' ||
          action === 'restar' ||
          action === 'multiplicar' ||
          action === 'dividir'
        ) return 'operador'
       
        return action
      }
     
      /**
       * 
       * @param {*} key 
       * @param {*} numeroEnPantalla 
       * @param {*} state 
       * 
       * crea el resultado segun el tipo de operador 
       */
      createResultString(key, numeroEnPantalla, state){
        const keyContent = key.textContent
        const keyValue = key.value
        const keyType = this.getKeyType(key)
        const {
          primerValor,
          operador,
          segundoValor,
          previousKeyType
        } = state
      
        if (keyType === 'numero') {
          return numeroEnPantalla === '0' ||
            previousKeyType === 'operador' ||
            previousKeyType === 'calcular'
            ? keyContent
            : numeroEnPantalla + keyContent 
        }
      
        if(keyType === 'input'){
            if(numeroEnPantalla === '0' ||
               previousKeyType === 'operador' ||
               previousKeyType === 'calcular') {  
                  return parseInt(keyValue) || 0 
             } else {
                  return numeroEnPantalla + parseInt(keyValue) 
            } 
      
        }
      
        if (keyType === 'decimal') {
          if (!numeroEnPantalla.includes('.')) return numeroEnPantalla + '.'
          if (previousKeyType === 'operador' || previousKeyType === 'calcular') return '0.'
          return numeroEnPantalla
        }
      
        if (keyType === 'operador') {
          return primerValor &&
            operador &&
            previousKeyType !== 'operador' &&
            previousKeyType !== 'calcular'
            ? this.calcular(primerValor, operador, numeroEnPantalla)
            : numeroEnPantalla
        }
      
        if (keyType === 'borrar') return 0
      
        if (keyType === 'calcular') {
          return primerValor
              ? previousKeyType === 'calcular'
              ? this.calcular(numeroEnPantalla, operador, segundoValor)
              : this.calcular(primerValor, operador, numeroEnPantalla)
            : numeroEnPantalla
        }
        
      }
      
       updateCalculatorState(key, calculadora, valorCalculado, numeroEnPantalla){
        const keyType = this.getKeyType(key) 
        const {
          primerValor,
          operador,
          segundoValor,
          previousKeyType
        } = calculadora.dataset
      
        calculadora.dataset.previousKeyType = keyType
      
        if (keyType === 'operador') {
          calculadora.dataset.operador = key.dataset.action
          document.forms[0][1].disabled = false
          calculadora.dataset.primerValor = primerValor && operador && previousKeyType !== 'operador' && previousKeyType !== 'calcular'
            ? valorCalculado : numeroEnPantalla
        }
      
        if (keyType === 'calcular') {
          calculadora.dataset.segundoValor = primerValor && previousKeyType === 'calcular'
            ? segundoValor
            : numeroEnPantalla;
            document.forms[0].reset()
            document.forms[0][1].disabled = true
        }
      
        if (keyType === 'borrar' || key.textContent === 'AC') {
              calculadora.dataset.primerValor = ''
              calculadora.dataset.segundoValor = ''
              calculadora.dataset.operador = ''
              calculadora.dataset.previousKeyType = ''
              document.forms[0].reset()
              document.forms[0][1].disabled = true
         }
      }


}

//Vista - Representación visuál de la data
/**
 * 1-Inputs
 *   |-Buttons 
 *   |-Operators
 *   |-Caluclar
 *   |-Borrar
 * 2-Output
 *   |-Screen
 * 3-Container
 *   |-Calculadora 
 */
class View {
    
    constructor(){
          const operators = ['+','-','*','/','=','AC']
          
        //calculadora
           const calculadora = this.getElement('#root')
           calculadora.classList.add('calculadora')
        //title
           const title = this.createElement('h1','title')
           title.textContent = "Calculadora"
           calculadora.append(title)   
        //screen
           const screen = this.createElement('div','screen')
           calculadora.append(screen)
           screen.textContent = 0
        //buttons
           const keys = this.createElement('div','keys')
           calculadora.append(keys)

           operators.forEach(operator => {
                const button = this.createElement('button','key--operator')
        
                button.textContent = operator

                keys.append(button)

                if(button.textContent === '+') button.dataset.action = 'sumar'
                if(button.textContent === '-') button.dataset.action = 'restar'
                if(button.textContent === '*') button.dataset.action = 'multiplicar'
                if(button.textContent === '/') button.dataset.action = 'dividir'
                if(button.textContent === '=') button.dataset.action = 'calcular'
                if(button.textContent === 'AC') button.dataset.action = 'borrar'
           })

             const form = this.createElement('form','formulario')
             calculadora.append(form)

             const inputs = ['num1','num2']
 
             inputs.forEach( (input,i) => {
                const numero = this.createElement('input')
                numero.name = input
                numero.type = 'text'
                numero.placeholder = `Value ${i + 1}`
                form.append(numero)
             })

    }
    //metodos 
    createElement(tag, className){
            const element = document.createElement(tag)
            if(className) element.classList.add(className)
            
            return element
    } 

    getElement(selector){
            const element = document.querySelector(selector)
            return element
    }

    get _numberText(){
        return this.input.value
    }

    displayResult(){}

}

//Controlador - Conecta el modelo con la vista y escucha los eventos que el usuario emite
/**
 * 1-Escuchar el evento Click de cada button
 * 2-Actualizar estado de pantalla
 * 3-Calcular en base a los valores definidos
 * 
 * 
 */
class Controller{
    constructor(model, view) {
        this.model = model,
        this.view = view
    }
   
}

const calculadora = new Controller(new Model(), new View())

