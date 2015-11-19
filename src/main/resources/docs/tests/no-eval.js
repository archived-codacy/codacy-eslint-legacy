//#Patterns: no-eval


var obj = { 
	x: "foo" 
}, 
key = "x", 
//#Warn: no-eval
value = eval("obj." + key);
