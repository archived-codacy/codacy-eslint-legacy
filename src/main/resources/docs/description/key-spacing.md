This rule enforces spacing around the colon in object literal properties. It can verify each property individually, or it can ensure vertical alignment of groups of properties in an object literal.
This rule will warn when spacing in properties does not match the specified options. In the case of long lines, it is acceptable to add a new line wherever whitespace is allowed. There are three modes:
Use the beforeColon, afterColon and mode options to enforce having one space or zero spaces on each side, using true or false, respectively. The default is no whitespace between the key and the colon and one space between the colon and the value.

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

[Source](http://eslint.org/docs/rules/key-spacing)
