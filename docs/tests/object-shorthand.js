//#Patterns: object-shorthand

var foo = {
	//#Warn: object-shorthand
	x: function() {},  
	//#Warn: object-shorthand
	y: function *() {}, 
	//#Warn: object-shorthand
	z: z               
};

var foo = {
    x() {},
    *y() {},
    z
};
