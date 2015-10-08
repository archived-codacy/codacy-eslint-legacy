The switch statement in JavaScript is one of the more error-prone constructs of the language thanks in part to the ability to "fall through" from one case to the next. For example:
In this example, if foo is 1,then execution will flow through both cases, as the first falls through to the second. You can prevent this by using break, as in this example:
That works fine when you don't want a fallthrough, but what if the fallthrough is intentional, there is no way to indicate that in the language. It's considered a best practice to always indicate when a fallthrough is intentional using a comment:

```
switch(foo) {
case 1: doSomething();
case 2: doSomethingElse();
}

```

[Source](http://eslint.org/docs/rules/no-fallthrough)
