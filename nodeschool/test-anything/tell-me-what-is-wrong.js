var test = require('./metatest.js')
//var assert = require('assert') 
var tapeTest = require('tape')

tapeTest('isCoolNumber accepts only cool numbers', (t) => {
   t.ok(test.isCoolNum(42), '42 should be cool'),
   t.end()
})

tapeTest('fancy function', (t) => {
    t.ok(test.fancyTest('Hola',true,'!'))
    t.end()
})
