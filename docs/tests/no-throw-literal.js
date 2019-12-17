//#Patterns: no-throw-literal

//#Info: no-throw-literal
throw "error"; 
//#Info: no-throw-literal
throw 0; 
//#Info: no-throw-literal
throw undefined; 
//#Info: no-throw-literal
throw null; 
var err = new Error(); 
//#Info: no-throw-literal
throw "an " + err; 
