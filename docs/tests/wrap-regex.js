//#Patterns: wrap-regex


function a() {
	//#Info: wrap-regex
	return /foo/.test("bar");
}

function a2() {
    return (/foo/).test("bar");
}
