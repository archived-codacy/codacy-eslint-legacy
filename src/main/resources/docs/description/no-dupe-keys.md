Creating objects with duplicate keys in objects can cause unexpected behavior in your application. The no-dupe-keys rule flags the use of duplicate keys in object literals.
This rule is aimed at preventing possible errors and unexpected behavior that might arise from using duplicate keys in object literals. As such, it warns whenever it finds a duplicate key.

```
//Bad:
var foo = {
    bar: "baz",
    bar: "qux"
};

//Good:
var foo = {
    bar: "baz",
    quxx: "qux"
};

```

[Source](http://eslint.org/docs/rules/no-dupe-keys)
