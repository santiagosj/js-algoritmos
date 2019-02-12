//estas dos primeras funciones cumplen la funcion de constructores tanto del nodo como de la lista enlcazada

function Node(value){
   this.value = value;
   this.next = null;
}

function LinkedList() {
  this.head = null
}

//agregar un nodo
LinkedList.prototype.append = function (value, current = this.head) {
  if (this.head === null) {
    return this.head = new Node(value)
  }
  if (current.next === null) {
     return current.next = new Node(value)
  }
  this.append(value, current.next)
};

//anteponer un nodo
LinkedList.prototype.prepend = function (value) {
  if(this.head === null){
    return this.head = Node(value)
  }

  let newNode = new Node(value)
  newNode.next = this.head
  this.head = newNode
}

//removiendo un nodo
LinkedList.prototype.removeNode = function(value, current = this.head){
  if (this.head === null) {
      return false
  }

  if (this.head.value === value) {
      return this.head = this.head.next
   }

  if (current.next !== null) {
     if (current.next.value === value) {
         return current.next = current.next.next
     }
     this.removeNode(value, current.next)
  }
  return false
}

//
