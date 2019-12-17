//#Patterns: no-path-concat

//#Warn: no-path-concat
var fullPath = __dirname + "/foo.js";

var fullPath = path.join(__dirname, "foo.js");

