//#Patterns: prefer-arrow-callback
//#Warn: prefer-arrow-callback

/*eslint prefer-arrow-callback: 2*/ foo(function(a) { return a; }); /*error Unexpected function expression.*/ foo(function() { return this.a; }.bind(this)); /*error Unexpected function expression.*/