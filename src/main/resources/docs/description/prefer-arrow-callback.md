Arrow functions are suited to callbacks, because:
This rule is aimed to flag usage of function expressions in an argument list.
The following patterns are considered problems:

```
/*eslint prefer-arrow-callback: 2*/ foo(function(a) {
return a;
}
);
/*error Unexpected function expression.*/ foo(function() {
return this.a;
}
.bind(this));
/*error Unexpected function expression.*/
```

[Source](http://eslint.org/docs/rules/prefer-arrow-callback)
