//#Patterns: no-use-before-define

//#Err: no-use-before-define
alert(a); 
var a = 10; 
//#Err: no-use-before-define
f(); 
function f() {}
