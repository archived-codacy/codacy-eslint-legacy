//#Patterns: no-dupe-args

//#Err: no-dupe-args
function foo(a, b, a) {
	console.log("which a is it?", a); 
}
