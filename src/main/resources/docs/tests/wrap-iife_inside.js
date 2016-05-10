//#Patterns: wrap-iife: {"unnamedParam": "inside"}

//#Info: wrap-iife
var x = function () { return { y: 1 };}(); // unwrapped

//#Info: wrap-iife
var x = (function () { return { y: 1 };}()); // wrapped call expression

var x = (function () { return { y: 1 };})(); // Ok, wrapped function expression
