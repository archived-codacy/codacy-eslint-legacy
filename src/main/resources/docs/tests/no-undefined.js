//#Patterns: no-undefined
//#Warn: no-undefined

function doSomething(data) { var undefined = "hi"; // doesn't do what you think it does if (data === undefined) { // ... } }