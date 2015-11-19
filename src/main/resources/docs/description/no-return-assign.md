One of the interesting, and sometimes confusing, aspects of JavaScript is that assignment can happen at almost any point. Because of this, an errant equals sign can end up causing assignment when the true intent was to do a comparison. This is especially true when using a return statement making it difficult to tell the intent of the return statement.

```
//Bad:
function doSomething() {
	return foo = bar + 2;
}
```

[Source](http://eslint.org/docs/rules/no-return-assign)
