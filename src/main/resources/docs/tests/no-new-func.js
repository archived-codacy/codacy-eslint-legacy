//#Patterns: no-new-func


//#Warn: no-new-func
var x = new Function("a", "b", "return a + b");

var x = function (a, b) {
    return a + b;
};
