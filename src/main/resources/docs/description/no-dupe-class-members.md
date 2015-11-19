If there are declarations of the same name in class members, the last declaration overwrites other declarations silently. It can cause unexpected behaviors.
This rule is aimed to flag the use of duplicate names in class members.

```
//Bad:
class Foo {
  bar() { }
  bar() { }
}
class Foo {
  bar() { }
  get bar() { }      /*error Duplicate name "bar".*/
}

//Good:
class Foo {
  bar() { }
  qux() { }
}

```

[Source](http://eslint.org/docs/rules/no-dupe-class-members)
