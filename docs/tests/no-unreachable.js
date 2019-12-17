//#Patterns: no-unreachable


function fn() { 
	x = 1; 
	return x;
	//#Err: no-unreachable
	x = 3; 
}
