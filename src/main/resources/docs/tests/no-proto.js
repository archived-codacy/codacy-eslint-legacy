//#Patterns: no-proto

//#Warn: no-proto
var a = obj.__proto__; 
//#Warn: no-proto
var a = obj["__proto__"];

var a = Object.getPrototypeOf(obj);
