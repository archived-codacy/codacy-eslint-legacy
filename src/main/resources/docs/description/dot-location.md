JavaScript allows you to place newlines before or after a dot in a member expression.
Consistency in placing a newline before or after the dot can greatly increase readability.
This rule aims to enforce newline consistency in member expressions. This rule prevents the use of mixed newlines around the dot in a member expression.´

You can specify wich style you prefer using the dotConvention parameter.
The default value is "property" and enforce the dot to be in the line with the property.

```
//error if dotConvention is set to "property"
var a = universe.
		galaxy;

//error if dotConvention is set to "object"		
var b = universe
		.galaxy;

```

[Source](http://eslint.org/docs/rules/dot-location)
