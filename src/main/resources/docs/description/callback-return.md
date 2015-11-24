The callback pattern is at the heart of most I/O and event-driven programming in JavaScript.
To prevent calling the callback multiple times it is important to return anytime the callback is triggered outside of the main function body. Neglecting this technique often leads to issues where you do something more than once. For example, in the case of an HTTP request, you may try to send HTTP headers more than once leading node.js to throw a Can't render headers after they are sent to the client. error.
This rule is aimed at ensuring that callbacks used outside of the main function block are always part-of or immediately preceding a return statement. This rules decides what is a callback based on the name of the function being called. By default the rule treats cb, callback, and next as callbacks.

```
//Bad:
function doSomething(err, callback) {
	if (err) {
		callback(err);
	}
		callback();
	}

//Good:
function doSomething(err, callback) {
	if (err) {
		return callback(err);
	}
		callback();
	}

```

[Source](http://eslint.org/docs/rules/callback-return)
