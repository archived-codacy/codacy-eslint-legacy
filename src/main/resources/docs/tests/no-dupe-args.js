//#Patterns: no-dupe-args
//#Warn: no-dupe-args

/*eslint no-dupe-args: 2*/ function foo(a, b, a) { /*error Duplicate param 'a'.*/ console.log("which a is it?", a); }