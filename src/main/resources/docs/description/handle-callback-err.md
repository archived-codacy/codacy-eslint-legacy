In node, a common pattern for dealing with asynchronous behavior is called the callback pattern. This pattern expects an Error object or null as the first argument of the callback. Forgetting to handle these errors can lead to some really strange behavior in your application.
This rule expects that when you're using the callback pattern in node you'll handle the error and requires that you specify the name of your error object. The name of the argument will default to err.

```
//Bad:
function loadData (err, data) {
	doSomething();
// forgot to handle error }

//Good:
function loadData (err, data) {
    if (err) {
        console.log(err.stack);
    }
    doSomething();
}
function generateError (err) {
    if (err) {}
}

```

[Source](http://eslint.org/docs/rules/handle-callback-err)
