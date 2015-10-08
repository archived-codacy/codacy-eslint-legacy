Object literal property names can be defined in two ways: using literals or using strings. For example, these two objects are equivalent:
In many cases, it doesn't matter if you choose to use an identifier instead of a string or vice-versa. Even so, you might decide to enforce a consistent style in your code.
There are, however, some occasions when you must use quotes:

```
var object1 = {
property: true }
;
var object2 = {
"property": true }
;

```

[Source](http://eslint.org/docs/rules/quote-props)
