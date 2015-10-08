The comma operator includes multiple expressions where only one is expected. It evaluates each operand from left to right and returns the value of the last operand. However, this frequently obscures side effects, and its use is often an accident. Here are some examples of its use:
This rule forbids the use of the comma operator, with the following exceptions:
The following patterns are considered problems:

```
var a = (3, 5);
// a = 5 a = b += 5, a + b;
while (a = next(), a && a.length);
(0,eval)("doSomething();
");

```

[Source](http://eslint.org/docs/rules/no-sequences)
