Some style guides require or disallow spaces inside of parentheses:
This rule will enforce consistency of spacing directly inside of parentheses, by disallowing or requiring one or more spaces to the right of ( and to the left of ). In either case, () will still be allowed.
There are two options for this rule: Always have spaces or never have spaces.

```
//Bad with always:
foo('bar');
var x = (1 + 2) * 3;

//Good with always:
foo( 'bar' );
var x = ( 1 + 2 ) * 3;


```

[Source](http://eslint.org/docs/rules/space-in-parens)
