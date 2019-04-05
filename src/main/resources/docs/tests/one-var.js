//#Patterns: one-var

 
function foo() {
    	var bar;
	//#Info: one-var
    	var baz;	  
	let qux;
	//#Info: one-var   
    	let norf;    
}

function foo2() {
    	var bar, baz;   
	let qux, norf;    
}
