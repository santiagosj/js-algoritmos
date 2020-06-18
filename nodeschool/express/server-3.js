const path = require('path')
const express = require('express')
const app = express()

app.set('views', path.join(__dirname, 'templates'))

app.get('/home',(req,res)=>{
   
})

app.listen(process.argv[2])
