console.log('documento cargado')

//============================================================================================

class Model{
   constructor(){
       // The state of the model, an array of todo objects, prepopulated with some data
       this.todos = JSON.parse(localStorage.getItem('todos')) || []
   }
  
   addTodo(todoText){
      const todo = {
          id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
          text: todoText,
          complete:false
      }
      this.todos.push(todo)
      this._commit(this.todos)
   }
   
   editTodo(id,updateText){
    this.todos = this.todos.map(todo => {
          todo.id === id ? {id:todo.id, text:updateText, complete:todo.complete }: todo
      })
      this._commit(this.todos)
   }
  
   deleteTodo(id){
       this.todos = this.todos.filter(todo => todo.id !== id)
       this._commit(this.todos)
   }
   
   toggleTodo(id){
        this.todos = this.todos.map(todo => todo.id === id ? {id:todo.id, text:todo.text, complete:!todo.complete}: todo)
        this._commit(this.todos)
   }
  //bind methods 
   bindTodoListChanged(callback){
      this.onTodoListChanged = callback
      this._commit(this.todos)
   }
   //función privada
   _commit(todos){
      this.onTodoListChanged(todos) //?
      localStorage.setItem('todos', JSON.stringify(todos))
   }
}

//============================================================================================

class View{
    constructor(){
        //the root element
          this.app = this.getElement('#root')

         // The title of the app
          this.title = this.createElement('h1')
          this.title.textContent = 'Todos'

          // The form, with a [type="text"] input, and a submit button
           this.form = this.createElement('form')

           this.input = this.createElement('input')
           this.input.type = 'text'
           this.input.placeholder = 'Add todo'
           this.input.name = 'todo'
           
           this.submitButton = this.createElement('button')
           this.submitButton.textContent = 'Add todo'

           // The visual representation of the todo list
           this.todoList = this.createElement('ul','todo-list')

            // Append the input and submit button to the form
           this.form.append(this.input, this.submitButton)

           // Append the title, form, and todo list to the app
           this.app.append(this.title, this.form, this.todoList)

           this._temporaryTodoText
           this._initLocalListeners()
    }

    createElement(tag, className){
        const element = document.createElement(tag)
        if(className) element.classList.add(className)
        return element
    }

    getElement(selector){
        const element = document.querySelector(selector)
        return element
    }

    get _todoText(){
        return this.input.value
    }

    _resetInput(){
        this.input.value = ''
    }

    displayTodos(todos){
        // Delete all nodes
             while (this.todoList.firstChild) {
                this.todoList.removeChild(this.todoList.firstChild)
             }

             if (todos.length === 0) {
                   const p = this.createElement('p')
                   p.textContent = 'Nothing to do! Add a task?'
                   this.todoList.append(p)
              } else {
                // Create todo item nodes for each todo in state
                todos.forEach(todo => {

                    const li = this.createElement('li')
                    li.id = todo.id
                     
                    // Each todo item will have a checkbox you can toggle
                    const checkbox = this.createElement('input')
                    checkbox.type = 'checkbox'
                    checkbox.checked = todo.complete

                     // The todo item text will be in a contenteditable span
                    const span = this.createElement('span')
                    span.contentEditable = true
                    span.classList.add('.editable')

                    // If the todo is complete, it will have a strikethrough
                    if(todo.complete){
                        const strike = this.createElement('s')
                        strike.textContent = todo.text
                        span.append(strike)
                    }else{
                        span.textContent = todo.text
                    }

                    // The todos will also have a delete button
                    const deleteButton = this.createElement('button', 'delete')
                    deleteButton.textContent='delete'

                    li.append(checkbox,span,deleteButton)

                    this.todoList.append(li)
                }) 
              }
              //debuging
              console.log(todos)
    }

    bindAddTodo(handler){
        this.form.addEventListener('submit', event => {
             event.preventDefault()

             if (this._todoText) {
                handler(this._todoText)
                this._resetInput()
              }

        })
    }

    bindDeleteTodo(handler){
        this.todoList.addEventListener('click',event => {
            if(event.target.className === 'delete'){
               const id = parseInt(event.target.parentElement.id)

               handler(id)
            }
        })
    }

    bindToggleTodo(handler){
        this.todoList.addEventListener('change',event => {
            if(event.target.type === 'checkbox'){
                const id = parseInt(event.target.parentElement.id)

                handler(id)
            }
        })
    }
   // Update temporary state
    _initLocalListeners(){
        this.todoList.addEventListener('input', event=>{
            if(event.target.className === 'editable'){
               this._temporaryTodoText = event.target.innerText
            }
        })
    }
 
    bindEditTodo(handler){
        this.todoList.addEventListener('focusout',event=>{
            if(this._temporaryTodoText){
                const id = parseInt(event.target.parentElement.id)

                handler(id,this._temporaryTodoText)
                this._temporaryTodoText = ''
            }
        })
    }

}

//============================================================================================

class Controller{
    constructor(model, view){

        this.model = model
        this.view = view
        
        // Display initial todos
        this.onTodoListChanged(this.model.todos)
        this.view.bindAddTodo(this.handleAddTodo)
        this.view.bindDeleteTodo(this.handleDeleteTodo)
        this.view.bindToggleTodo(this.handleToggleTodo)
        this.model.bindTodoListChanged(this.onTodoListChanged)
        this.view.bindEditTodo(this.handleEditTodo)
    }

    onTodoListChanged = (todos) => {
        this.view.displayTodos(todos)
    }

    handleAddTodo = (todoText) => {
        this.model.addTodo(todoText)
    }

    handleEditTodo = (id, todoText) => {
        this.model.editTodo(id,todoText)
    }

    handleDeleteTodo = id => {
        this.model.deleteTodo(id)
    }
      
    handleToggleTodo = id => {
        this.model.toggleTodo(id)
    }

}

//============================================================================================
const app = new Controller(new Model, new View)


