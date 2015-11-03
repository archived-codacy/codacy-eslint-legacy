//#Patterns: no-unreachable
//#Warn: no-unreachable

function fn() { x = 1; return x; x = 3; // this will never execute }