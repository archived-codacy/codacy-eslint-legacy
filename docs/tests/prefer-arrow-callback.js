//#Patterns: prefer-arrow-callback

//#Warn: prefer-arrow-callback
foo(function(a) { return a; });  
//#Warn: prefer-arrow-callback              
foo(function() { return this.a; }.bind(this)); 

var foo = function foo(a) { return a; };
