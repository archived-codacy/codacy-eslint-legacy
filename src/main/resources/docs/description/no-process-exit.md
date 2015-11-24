The process.exit() method in Node.js is used to immediately stop the Node.js process and exit. This is a dangerous operation because it can occur in any method at any point in time, potentially stopping a Node.js application completely when an error occurs. It's usually better to throw an error and allow the application to handle it appropriately. By throwing an error in this way, other parts of the application have an opportunity to handle the error rather than stopping the application altogether. If the error bubbles all the way up to the process without being handled, then the process will exit and a non-zero exit code will returned, so the end result is the same.

```
//Bad:
if (somethingBadHappened) {
	console.error("Something bad happened!");
	process.exit(1);
}

```

[Source](http://eslint.org/docs/rules/no-process-exit)
