Shadowing is the process by which a local variable shares the same name as a variable in its containing scope. This rule aims to eliminate shadowed variable declarations.

```
//Bad:
var a = 3;
function b() {
	var a = 10;
}

```

[Source](http://eslint.org/docs/rules/no-shadow)
