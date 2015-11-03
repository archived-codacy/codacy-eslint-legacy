//#Patterns: no-label-var
//#Warn: no-label-var

/*eslint no-label-var: 2*/ var x = foo; function bar() { x: /*error Found identifier with same name as label.*/ for (;;) { break x; } }