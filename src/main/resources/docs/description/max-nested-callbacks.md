Many JavaScript libraries use the callback pattern to manage asynchronous operations. A program of any complexity will most likely need to manage several asynchronous operations at various levels of concurrency. A common pitfall that is easy to fall into is nesting callbacks, which makes code more difficult to read the deeper the callbacks are nested.
This rule is aimed at increasing code clarity by discouraging deeply nesting callbacks. As such, it will warn when callbacks are nested deeper than the specified limit.
There is no default max depth for this rule. You must configure the depth as an option by using the second argument in your configuration. For example, this sets the rule as an error (code is 2) with a maximum depth of 3:

```
//Bad:
foo(function () {
	bar(function () {
		baz(function() {
			qux(function () {
			}
			);
		}
		);
	}
	);
}
);

//Good:
foo(handleFoo);
function handleFoo (){
    bar(handleBar);
}
function handleBar() {
    baz(handleBaz);
}
function handleBaz() {
    qux(handleQux);
}
function handleQux() {
}

```

[Source](http://eslint.org/docs/rules/max-nested-callbacks)
