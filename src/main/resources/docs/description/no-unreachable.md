A number of statements unconditionally exit a block of code. Any statements after that will not be executed and may be an error. The presence of unreachable code is usually a sign of a coding error. This rule is aimed at detecting unreachable code. It produces an error when a statements in a block exist after a return, throw, break, or continue statement. The rule checks inside the program root, block statements, and switch cases.

```
//Bad:
function fn() {
    x = 1;
    return x;
    x = 3; // this will never execute
}

function foo() {
    return true;
    console.log("done");
}

```

[Source](http://eslint.org/docs/rules/no-unreachable)
