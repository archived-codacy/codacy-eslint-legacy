//#Patterns: no-loop-func

for (var i = 0; i < 10; i++) {
	//#Info: no-loop-func
	funcs[i] = function() {
		return i;
	};
}

for (var i=10; i; i--) {
    a();
}
