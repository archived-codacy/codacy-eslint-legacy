The switch statement in JavaScript is one of the more error-prone constructs of the language thanks in part to the ability to "fall through" from one case to the next.

```
//Bad:
switch(foo) {
    case 1:
        doSomething();

    case 2:
        doSomethingElse();
}
//Good:
switch(foo) {
    case 1:
        doSomething();
	break;
    case 2:
        doSomethingElse();
	break;
}

```


[Source](http://eslint.org/docs/rules/no-fallthrough)
