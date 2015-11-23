//#Patterns: no-unused-vars

var x;

//#Warn: no-unused-vars
var y = 10;
y = 5;

//#Warn: no-unused-vars
(function(foo) { 
    return 5;
})();

//#Warn: no-unused-vars
function fact(n) {
    if (n < 2) return 1;
    return n * fact(n - 1);
}

alert(x);
