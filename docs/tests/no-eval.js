//#Patterns: no-eval


var obj = { 
	x: "foo" 
}, 
key = "x", 
//#Info: no-eval
value = eval("obj." + key);
