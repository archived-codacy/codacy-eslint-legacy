Enforce consistent spacing between keys and values in object literal properties

This rule is the same rule as core key-spacing rule but it applies to the expressions in `<template>`.

```
//Good with "beforeColon" false and "afterColon" true
var obj = { "foo": (42) };

foo = { thisLineWouldBeTooLong:
    soUseAnotherLine };

//Bad with allign with "align": "value" 
var obj = {
    a: value,
    bcde:  42,
    fg :   foo()
};

//Good with allign with "align": "value"
var obj = {
    a:    value,
    bcde: 42,

    fg: foo(),
    h:  function() {
        return this.a;
    },
    ijkl: 'Non-consecutive lines form a new group'
};

var obj = { a: "foo", longPropertyName: "bar" };

//Bad with allign with "align": "Colon" 
var obj = {
    one:   1,
    "two": 2,
    three:  3 
};

//Good with allign with "align": "Colon"
var obj = {
    foobar   : 42,
    bat      : (2 * 2),
    "default": fn(),

    fn : function() {},
    abc: value
};
```

[Source](https://eslint.vuejs.org/rules/key-spacing.html#vue-key-spacing)
