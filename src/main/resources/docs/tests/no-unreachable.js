//#Patterns: no-unreachable


function fn() { 
	x = 1; 
	return x;
	//#Warn: no-unreachable
	x = 3; 
}
