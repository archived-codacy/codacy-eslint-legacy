//#Patterns: no-proto
//#Warn: no-proto

/*eslint no-proto: 2*/ var a = obj.__proto__; /*error The '__proto__' property is deprecated.*/ var a = obj["__proto__"]; /*error The '__proto__' property is deprecated.*/