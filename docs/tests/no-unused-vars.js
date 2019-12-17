//#Patterns: no-unused-vars

var x;

//#Info: no-unused-vars
var y = 10;
y = 5;

//#Info: no-unused-vars
(function(foo) { 
    return 5;
})();

//#Info: no-unused-vars
function fact(n) {
    if (n < 2) return 1;
    return n * fact(n - 1);
}

alert(x);
