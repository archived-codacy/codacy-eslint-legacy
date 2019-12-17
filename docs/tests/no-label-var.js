//#Patterns: no-label-var


var x = foo; 
function bar() { 
	//#Info: no-label-var
	x:  
	for (;;) { 
		break x; 
	} 
}
