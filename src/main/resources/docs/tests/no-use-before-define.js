//#Patterns: no-use-before-define
//#Warn: no-use-before-define

/*eslint no-use-before-define: 2*/ /*eslint-env es6*/ alert(a); /*error a was used before it was defined*/ var a = 10; f(); /*error f was used before it was defined*/ function f() {} function g() { return b; /*error b was used before it was defined*/ } var b = 1; // With blockBindings: true { alert(c); /*error c was used before it was defined*/ let c = 1; }