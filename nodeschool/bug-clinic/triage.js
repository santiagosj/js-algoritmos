/**
 * 1. You can pass as many comma-separated parameters to them as you
   like, and the results will be printed separated by spaces.
2. The parameters to the call are passed to Node's util.format(),
   so you can use %s (for strings), %d (for numbers), and %j (for
   objects, passed through JSON.stringify()), just as you would
   in a call to util.format().

For debugging, there are a few more useful methods:

  console.trace(label): dump stacktrace at line trace is called, with label
  console.time(label) / console.timeEnd(label): quick & dirty benchmarking
  console.assert(expression, arguments): assert that expression is true
  console.dir(object): call util.inspect() on `object`, print results

In day-to-day debugging, console.error, console.dir and console.trace
are the most useful of these functions. They will give you the why,
the what, and the where without requiring a bunch of extra effort.
 */

  // scenario.js
  var fs = require("fs");

  var peach = function (obj) {
    // trace the message "traced"
    // dump obj to stdout
        console.trace("traced");
        console.log(obj)
  };

  var bowser = function (callback) {
    fs.readFile(process.argv[2], {encoding : "utf8"}, callback);
  };

  var koopa = function (error, file) {
    // handle error by printing something to stderr
    try{
        peach(JSON.parse(file));
    }catch(error){
        console.error(error)
    }
    
    
  };

  bowser(koopa);