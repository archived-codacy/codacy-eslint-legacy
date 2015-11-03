//#Patterns: no-dupe-class-members
//#Warn: no-dupe-class-members

/*eslint-env es6*/ class Foo { bar() { console.log("hello"); } bar() { console.log("goodbye"); } } var foo = new Foo(); foo.bar(); // goodbye