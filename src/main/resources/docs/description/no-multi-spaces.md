Multiple spaces in a row that are not used for indentation are typically mistakes. For example:

```
if(foo   === "bar") {}
```

It's hard to tell, but there are two spaces between foo and ===.

```
if(foo   === "bar") {}
```

This rule aims to disallow multiple whitespace around logical expressions, conditional expressions, declarations, array elements, object properties, sequences and function parameters.
The following patterns are considered problems:

```
/*eslint no-multi-spaces: 2*/

var a =  1;            /*error Multiple spaces found before '1'.*/

if(foo   === "bar") {} /*error Multiple spaces found before '==='.*/

a <<  b                /*error Multiple spaces found before 'b'.*/

var arr = [1,  2];     /*error Multiple spaces found before '2'.*/

a ?  b: c              /*error Multiple spaces found before 'b'.*/
```

[Source](http://eslint.org/docs/rules/no-multi-spaces)
