//#Patterns: no-else-return


function foo() { 
	if (x) { 
		return y; 
	} 
//#Info: no-else-return
	else { 
		return z; 
	} 
}
