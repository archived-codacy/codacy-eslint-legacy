//#Patterns: no-throw-literal

//#Warn: no-throw-literal
throw "error"; 
//#Warn: no-throw-literal
throw 0; 
//#Warn: no-throw-literal
throw undefined; 
//#Warn: no-throw-literal
throw null; 
var err = new Error(); 
//#Warn: no-throw-literal
throw "an " + err; 
