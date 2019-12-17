//#Patterns: no-dupe-keys


var foo = { bar: "baz", 
	    //#Err: no-dupe-keys
	    bar: "qux" 
};
