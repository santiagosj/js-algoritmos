const fs = require('fs')

 fs.readFile(process.argv[2], 'utf-8', (err, data)=>{
     try{
         console.log( data.toString().split('\n').length - 1 ) 
     }catch(err){
         console.error(err)
     }
 } )