//#Patterns: no-new-func


//#Info: no-new-func
var x = new Function("a", "b", "return a + b");

var x = function (a, b) {
    return a + b;
};
