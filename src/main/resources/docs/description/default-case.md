Some code conventions require that all switch statements have a default case, even if the default case is empty, such as:

```
switch (foo) {
    case 1:
        doSomething();
        break;

    case 2:
        doSomething();
        break;

    default:
        // do nothing
}
```

The thinking is that it's better to always explicitly state what the default behavior should be so that it's clear whether or not the developer forgot to include the default behavior by mistake.
Other code conventions allow you to skip the default case so long as there is a comment indicating the omission is intentional, such as:

```
switch (foo) {
    case 1:
        doSomething();
        break;

    case 2:
        doSomething();
        break;

    // no default
}
```

This rule aims to require default case in switch statements. You may optionally include a // no default after the last case if there is no default case.
The following pattern is considered a warning:

```
switch (a) {       /*error Expected a default case.*/
    case 1:
        /* code */
        break;
}
```


[Source](http://eslint.org/docs/rules/default-case)
