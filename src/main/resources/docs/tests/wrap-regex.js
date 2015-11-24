//#Patterns: wrap-regex


function a() {
	//#Info: wrap-regex
	return /foo/.test("bar");
}

function a() {
    return (/foo/).test("bar");
}
