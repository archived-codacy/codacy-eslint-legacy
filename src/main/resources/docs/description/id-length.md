Very short identifier names like e, x, _t or very long ones like hashGeneratorResultOutputContainerObject usually make the code harder to read and potentially less maintainable. To prevent this, one may enforce a minimum and/or maximum identifier length. (usually min 2-chars)
This rule is aimed at increasing code readability and maintainability by enforcing an identifier length convention. It will warn on any type of identifier which doesn't conform to length limits (upper and lower).
It allows the programmers to silently by-pass this check by using "quoted" property names or calculated property access to allow potential server-side data requirements.

```
//default is minimum 2-chars ({min: 2})
//Bad:
var x = 5;

//Good:
var foo = 5;


```

[Source](http://eslint.org/docs/rules/id-length)
