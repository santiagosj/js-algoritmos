var calb = require('./metatest.js');
var tapeTest = require('tape');

tapeTest('call-me-maybe', (t)=>{
    let n = 5;
    t.plan(n);
    calb.repeatCallback(n, ()=>{
        t.pass('cb called')
    })

})