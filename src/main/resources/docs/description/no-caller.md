The use of arguments.caller and arguments.callee make several code optimizations impossible. They have been deprecated in future versions of JavaScript and their use is forbidden in ECMAScript 5 while in strict mode.
This rule is aimed at discouraging the use of deprecated and sub-optimal code, but disallowing the use of arguments.caller and arguments.callee. As such, it will warn when arguments.caller and arguments.callee are used.
The following patterns are considered problems:

```

//Bad:
function foo(n) {
    if (n <= 0) {
        return;
    }
    arguments.callee(n - 1); 
}

//Good:
function foo(n) {
    if (n <= 0) {
        return;
    }

    foo(n - 1);
}

```

[Source](http://eslint.org/docs/rules/no-caller)
