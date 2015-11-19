This rule aims to create clearer code by disallowing the bad practice of creating a label that shares a name with a variable that is in scope. 

```
//Bad:
var x = foo;
function bar() {
	x: 
	for (;;) {
		break x;
	}
}

```

[Source](http://eslint.org/docs/rules/no-label-var)
