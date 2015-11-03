//#Patterns: no-inner-declarations
//#Warn: no-inner-declarations

// Good function doSomething() { } // Bad if (test) { function doSomethingElse () { } } function anotherThing() { var fn; if (test) { // Good fn = function expression() { }; // Bad function declaration() { } } }