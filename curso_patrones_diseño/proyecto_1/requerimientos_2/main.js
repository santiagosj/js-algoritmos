function addCardCat(name, url){
  
  let p = document.createElement("p")

  let counter = 0;

  this.name = name

  //1- crear el elemento CAT y setear sus respectivos atributos
  let cat = document.createElement("img")

  document.body.appendChild(cat)

  document.body.appendChild(p)

  cat.setAttribute("id", `${this.name}`)

  cat.setAttribute("src",`${url}`)
  
  let catId = document.getElementById(`${this.name}`)
  
  //2-Crear el elemento en donde se deplega el conteo de clicks
  p.setAttribute("id",`counter-${this.name}`)
  let x = document.getElementById(`counter-${this.name}`)
  
  //3-confugurar el evento
  catId.addEventListener('click', function(){
    x.innerHTML= `You clicked me ${counter += 1} times.`;
  }) 
  
}

addCardCat('felix','../assets/felix.gif');
addCardCat('garfield','../assets/garfield.gif');