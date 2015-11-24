EcmaScript 6 provides a concise form for defining object literal methods and properties. This syntax can make defining complex object literals much cleaner. In EcmaScript 6:

```

//Bad:
var foo = {
    x: function() {},
    y: function *() {},
    z: z
};


//Good:
var foo = {
    x() {},
    *y() {},
    z
};

```

[Source](http://eslint.org/docs/rules/object-shorthand)
