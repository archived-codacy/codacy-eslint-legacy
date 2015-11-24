Cyclomatic complexity measures the number of linearly independent paths through a program's source code. This rule allows setting a cyclomatic complexity threshold.
This rule is aimed at reducing code complexity by capping the amount of cyclomatic complexity allowed in a program. As such, it will warn when the cyclomatic complexity crosses the configured threshold.
The following patterns are considered problems:

```
//Bad:
function a(x) {
    if (true) {
        return x; // 1st path
    } else if (false) {
        return x+1; // 2nd path
    } else {
        return 4; // 3rd path
    }
}
//Good:
function a(x) {
    if (true) {
        return x;
    } else {
        return 4;
    }
}
```

[Source](http://eslint.org/docs/rules/complexity)
