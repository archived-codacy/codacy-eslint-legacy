If there are declarations of the same name in class members, the last declaration overwrites other declarations silently. It can cause unexpected behaviors.
This rule is aimed to flag the use of duplicate names in class members.
The following patterns are considered problems:

```
/*eslint-env es6*/ class Foo {
bar() {
console.log("hello");
}
bar() {
console.log("goodbye");
}
}
var foo = new Foo();
foo.bar();
// goodbye
```

[Source](http://eslint.org/docs/rules/no-dupe-class-members)
