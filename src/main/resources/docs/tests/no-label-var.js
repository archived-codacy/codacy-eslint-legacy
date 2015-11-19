//#Patterns: no-label-var


var x = foo; 
function bar() { 
	//#Warn: no-label-var
	x:  
	for (;;) { 
		break x; 
	} 
}
