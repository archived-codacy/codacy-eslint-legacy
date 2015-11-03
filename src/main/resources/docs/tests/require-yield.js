//#Patterns: require-yield
//#Warn: require-yield

/*eslint require-yield: 2*/ /*eslint-env es6*/ function* foo() { /*error This generator function does not have `yield`.*/ return 10; }