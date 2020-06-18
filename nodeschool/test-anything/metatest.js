const isCoolNum = function(n){
   return n === 42
}

const fancyTest = function(str, bool, char){
   
   if(bool) str = str.toUpperCase();
   
    char = char || '*';
 
    console.log(`~${char}~ ${str} ~${char}~`)
    
    return `~${char}~ ${str} ~${char}~`
}

const repeatCallback = (n, cb) => {
    if (n < 1) return
    cb()
    repeatCallback(n - 1, cb)
}

const feedCat = (str) => {
   if(str === '🍫'){
     throw new Error('No, chocolate is dangerous!')  
   }else{
       console.log("yum")
       return "yum"
   }
} 

module.exports = {
    isCoolNum,
    fancyTest,
    repeatCallback,
    feedCat
}
