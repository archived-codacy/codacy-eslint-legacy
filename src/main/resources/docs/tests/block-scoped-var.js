//#Patterns: block-scoped-var


//#Warn: block-scoped-var
function doSomething() { if (true) { var build = true; } console.log(build); }
