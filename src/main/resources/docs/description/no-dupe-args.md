In strict mode you will receive a SyntaxError if a function takes multiple arguments with the same name. Outside of strict mode duplicate arguments will mask the value of the first argument. This rule checks for duplicate parameter names to help prevent that mistake.
This rule prevents having duplicate param names.

```
//Bad:
function foo(a, b, a) {
	console.log("which a is it?", a);
}

```

[Source](http://eslint.org/docs/rules/no-dupe-args)
