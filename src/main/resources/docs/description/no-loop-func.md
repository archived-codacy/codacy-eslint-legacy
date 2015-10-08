Writing functions within loops tends to result in errors due to the way the function creates a closure around the loop. For example:
In this case, you would expect each function created within the loop to return a different number. In reality, each function returns 10, because that was the last value of i in the scope.
let or const mitigate this problem.

```
for (var i = 0;
i < 10;
i++) {
funcs[i] = function() {
return i;
}
;
}

```

[Source](http://eslint.org/docs/rules/no-loop-func)
