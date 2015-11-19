Writing functions within loops tends to result in errors due to the way the function creates a closure around the loop. Your code may run without any problems if you do not fix this error, but in some situations it could behave unexpectedly.

```
//Bad:
for (var i = 0; i < 10; i++) {
    funcs[i] = function() {
        return i;
    };
}

//Good:
for (var i=10; i; i--) {
    a();
}

```

[Source](http://eslint.org/docs/rules/no-loop-func)
