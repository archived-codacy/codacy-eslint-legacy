Object literal property names can be defined in two ways: using literals or using strings. In many cases, it doesn't matter if you choose to use an identifier instead of a string or vice-versa. Even so, you might decide to enforce a consistent style in your code. 
This rule takes diffrent one argument which can be "always" (default), "as-needed", "consistent" and "consistent-as-needed". With always this rule will flag all properties that are not quoted.

```
//Bad with always:
var object = {
    foo: "bar",
    baz: 42, 
    "qux-lorem": true
};

//Good with always:
var object = {
    "foo": "bar",
    "baz": 42,
    "qux-lorem": true
};


```

[Source](http://eslint.org/docs/rules/quote-props)
