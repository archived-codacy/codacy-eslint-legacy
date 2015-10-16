The comma operator includes multiple expressions where only one is expected. It evaluates each operand from left to right and returns the value of the last operand. However, this frequently obscures side effects, and its use is often an accident. Here the value 3 is lost:

```
var a = (3, 5); // a = 5
```

This rule forbids the use of the comma operator, with the following exceptions:
* In the initialization or update portions of a for statement.
* If the expression sequence is explicitly wrapped in parentheses.

The following patterns are considered problems:

```
foo = doSomething, val;              /*error Unexpected use of comma operator.*/

do {} while (doSomething(), !!test); /*error Unexpected use of comma operator.*/

for (; doSomething(), !!test; );     /*error Unexpected use of comma operator.*/

if (doSomething(), !!test);          /*error Unexpected use of comma operator.*/
```

[Source](http://eslint.org/docs/rules/no-sequences)
