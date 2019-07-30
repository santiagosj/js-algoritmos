//funciones útiles
var str = "Te leo al reves"

//chartAt devuelve el caracter pasandole el indece como parametro

for(let i = 0; i < str.length; i++){
    console.log(str.charAt(i))
}

//charCodeAt y fromCharCode
//charCodeAt devuelve el numero de unicode
//fromCharCode devuelve un string a partir de unicode

console.log(str.charCodeAt(0))
console.log( String.fromCharCode( str.charCodeAt(0) + 1) );
//toUpperCase
console.log(str.charAt(1).toUpperCase());
//split convierte un string en un array
var arr1 = str.split("")
var arr2 = str.split(" ")
console.log(arr1)
console.log(arr2)
//substr devuelve un string, el primer parametro nos indica el cominzo y el segundo la candidad de caractéres
var part = str.substr(7, 8)
console.log(part)