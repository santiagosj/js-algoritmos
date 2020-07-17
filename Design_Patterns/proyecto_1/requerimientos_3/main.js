
var catNames = ["felix", "garfield", "heatcliff", "neo", "stimpy", "tom", "oldCat"]

//marco para desplegar las imagenes

for(let name of catNames){

    let cardCat = document.createElement("div")
    
    cardCat.setAttribute("class", "card")
    
    cardCat.innerHTML = name;
    //IIFE
    cardCat.addEventListener('click', (function(nameCopy){
     
        return function(){
            let counter = 0;
            let frame = document.createElement("div")
            let img = document.createElement("img")
            let p = document.createElement("p")

            document.body.appendChild(frame)
            frame.appendChild(img)
            frame.appendChild(p)
            
            p.setAttribute('class', 'name')
            img.setAttribute("src",`../assets/${nameCopy}.gif`)

            img.addEventListener('click', function(){
                p.textContent = `Amount of clicks: ${counter += 1} name: ${nameCopy}`
            })
            
        }

    })(name))

    document.body.appendChild(cardCat)
}
