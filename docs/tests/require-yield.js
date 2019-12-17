//#Patterns: require-yield

//#Warn: require-yield
 function* foo() { 
	 return 10; 
}

function* foo2() {
	yield 5;
	return 10;
}
