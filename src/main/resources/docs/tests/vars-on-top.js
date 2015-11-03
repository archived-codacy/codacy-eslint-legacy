//#Patterns: vars-on-top
//#Warn: vars-on-top

/*eslint vars-on-top: 2*/ // Variable declarations in a block: function doSomething() { var first; if (true) { first = true; } var second; /*error All "var" declarations must be at the top of the function scope.*/ } // Variable declaration in for initializer: function doSomething() { for (var i=0; i<10; i++) {} /*error All "var" declarations must be at the top of the function scope.*/ } // Variables after other statements: f(); var a; /*error All "var" declarations must be at the top of the function scope.*/