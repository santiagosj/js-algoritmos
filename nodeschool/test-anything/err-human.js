var tapeTest = require('tape');
var feedTest = require('./metatest.js')

tapeTest('feedCat but not with choco',(t)=>{
        t.plan(3)
        t.equal(feedTest.feedCat('🐟'), 'yum');
        t.equal(feedTest.feedCat('💩'), 'yum');
        t.throws(feedTest.feedCat.bind(null, '🍫'), Error);
})

