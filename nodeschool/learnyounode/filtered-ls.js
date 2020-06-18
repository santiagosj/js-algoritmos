const fs = require('fs')
const path = require('path')
//const http = require('http')

const file = process.argv[2]

const extname = '.' + path.extname(process.argv[3])

fs.readdir(file, 'utf-8',(err, list)=> {
    try{
        list.filter(el => el.endsWith(extname))
    }catch(err){
        console.log(err)
    }
})



/*http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('Holas')
}).listen(8080)*/