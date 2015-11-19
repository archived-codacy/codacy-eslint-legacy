The comma operator includes multiple expressions where only one is expected. It evaluates each operand from left to right and returns the value of the last operand. However, this frequently obscures side effects, and its use is often an accident.

```

//Bad:
var a = (3, 5); // a = 5
foo = doSomething, val;
do {} while (doSomething(), !!test);
for (; doSomething(), !!test; );
if (doSomething(), !!test);

```

[Source](http://eslint.org/docs/rules/no-sequences)
