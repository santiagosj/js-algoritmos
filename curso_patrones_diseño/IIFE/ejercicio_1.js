//ejemplo básico-1
 (function(){
     console.log("Hola IIFE")
 })();
 
 //ejemplo básico-2
 (function(nombre){
     console.log(`Hola ${nombre}`)
 })('Willy')

//ejemplo básico-3
const myFuncion = (
    function(nombre){
        const hola = "Hola";
        return function(){
           console.log(`${hola} ${nombre}`)
        }
     }
    )('Santi')

myFuncion(); //?WTF

document.body.innerHTML = '';

var nums = [1,2,3];

// Let's loop over the numbers in our array
for (var i = 0; i < nums.length; i++) {

    // This is the number we're on...
    var num = nums[i];

    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.textContent = num;

    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', (function(numCopy) {
        return function() {
            alert(numCopy);
        };
    })(num));

    document.body.appendChild(elem);
};