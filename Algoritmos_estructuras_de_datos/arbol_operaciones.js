//constructores
function Node(){
  this.value = val;
  this.children = [];
}

function Tree(){
  this.root = null;
}

//busqueda por anchura
Tree.prototype.busquedaAncho = function (value) {
   var cola = [this.root]

   while (cola.length) {
     var node = cola.shift()

     if (node.value === value) {
         return node
     }

     for (var i = 0; i < node.children.length; i++) {
       cola.push(node.children[i])
     }
   }
   return null;
};

//inserción
Tree.prototype.add = function (value, toNodeValue){
  var node = new Node(value)
  var parent = toNodeValue ? this.busquedaAncho(toNodeValue) : null

  if (parent) {

    parent.children.push(node)

  } else if(!this.root) {

    this.root = node

  } else {

    throw new Error ("El nodo root ya está asignado")

  }
};

//elminando un valor
Tree.prototype.remove = function (value){

  //resetea el árbol si el valor a borrar esta en el nodo raíz

  if (this.root.value === value) {
        this.root = null
     }

  var cola = [this.root]

  while (cola.length) {
    var node = cola.shift()

    for (var i = 0; i < node.children.length; i++) {
        if (node.children.value[i] === value) {
              node.children.splice(i, 1)
            } else {
              cola.push(node.children[i])
          }
       }
    }
 };

//recorrido a lo ancho, recorre primero los hermanos antes de pasar a los hijos
Tree.prototype.recorridoAncho = function(fn){
  var cola = [this.root]

  while (cola.length) {
    var node = cola.shift()

    fn && fn(node)

    for (var i = 0; i < node.children.length; i++) {
      cola.push(node.children[i])
    }
  }
};

//recorrido en profundidad, hace un recorrido de manera vertical por el arbol

Tree.prototype.recorridoProfundidad = function(fn, method){
  var current = this.root;

  if (method) {
       this['_' + method](current, fn)
  }else {
    this._preOrder(current, fn)
  }
}

Tree.prototype._preOrder = function(node, fn){

    if (!node) {
        return;
    }

    fn && fn(node)

    for (var i = 0; i < node.children.length; i++) {
        this._preOrder(node.children[i], fn)
    }
}

Tree.prototype._postOrder = function(node, fn){

  if (!node) {
      return;
  }

  for (var i = 0; i < node.children.length; i++) {
      this._preOrder(node.children[i], fn)
  }

  fn && fn(node)

}
