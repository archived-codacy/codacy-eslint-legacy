//#Patterns: no-use-before-define

//#Info: no-use-before-define
alert(a); 
var a = 10; 
//#Info: no-use-before-define
f(); 
function f() {}
