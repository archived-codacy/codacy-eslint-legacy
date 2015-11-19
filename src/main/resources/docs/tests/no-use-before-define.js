//#Patterns: no-use-before-define


//#Warn: no-use-before-define
alert(a); 
var a = 10; 
//#Warn: no-use-before-define
f(); 
function f() {} 
function g() { 
	//#Warn: no-use-before-define
	return b; 
} 

var b = 1; 
//#Warn: no-use-before-define
true { 
	//#Warn: no-use-before-define
	alert(c); 
	let c = 1; 
}
