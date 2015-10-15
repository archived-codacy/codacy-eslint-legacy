One of the interesting, and sometimes confusing, aspects of JavaScript is that assignment can happen at almost any point. Because of this, an errant equals sign can end up causing assignment when the true intent was to do a comparison. This is especially true when using a return statement. For example:

```
function doSomething() {
	return foo = bar + 2;
}
```

It is difficult to tell the intent of the return statement here. It's possible that the function is meant to return the result of bar + 2, but then why is it assigning to foo? It's also possible that the intent was to use a comparison operator such as == and that this code is an error.
Because of this ambiguity, it's considered a best practice to not use assignment in return statements.

The rule takes one option, a string, which must contain one of the following values:

* except-parens (default): Disallow assignments unless they are enclosed in parentheses.
* always: Disallow all assignments.

With except-parens as an option you can do:

```
function doSomething() {
    return (foo = bar + 2);
}
```

The following patterns are considered problems:

[Source](http://eslint.org/docs/rules/no-return-assign)
