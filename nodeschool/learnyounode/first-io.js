const fs = require('fs')
const buf = fs.readFileSync('C:/Users/sanjs/Desktop/text.txt','utf8') //sincronica
const lines = buf.toString()

console.log(lines)
