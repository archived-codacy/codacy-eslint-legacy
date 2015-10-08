This option validates a specific tab width for your code in block statements.
There are several common guidelines which require specific indentation of nested blocks and statements, like:
This is the most common scenarios recommended in different style guides:

```
function hello(indentSize, type) {
if (indentSize === 4 && type !== 'tab') {
console.log('Each next indentation will increase on 4 spaces');
}
}

```

[Source](http://eslint.org/docs/rules/indent)
