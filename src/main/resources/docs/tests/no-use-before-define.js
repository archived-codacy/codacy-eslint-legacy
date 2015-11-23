//#Patterns: no-use-before-define

//#Warn: no-use-before-define
alert(a); 
var a = 10; 
//#Warn: no-use-before-define
f(); 
function f() {}
