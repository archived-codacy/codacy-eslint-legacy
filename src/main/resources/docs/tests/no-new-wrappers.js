//#Patterns: no-new-wrappers

//#Warn: no-new-wrappers
var stringObject = new String("Hello world"); 
//#Warn: no-new-wrappers
var numberObject = new Number(33);    
//#Warn: no-new-wrappers       
var booleanObject = new Boolean(false); 

var text = String(someValue);
var num = Number(someValue);

var object = new MyString();
