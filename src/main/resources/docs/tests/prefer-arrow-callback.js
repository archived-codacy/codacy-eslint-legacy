//#Patterns: prefer-arrow-callback

//#Info: prefer-arrow-callback
foo(function(a) { return a; });  
//#Info: prefer-arrow-callback              
foo(function() { return this.a; }.bind(this)); 

var foo = function foo(a) { return a; };
