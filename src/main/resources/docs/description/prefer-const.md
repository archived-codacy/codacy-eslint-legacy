If a variable is never modified, using the const declaration is better.
const declaration tells readers, "this variable is never modified," reducing cognitive load and improving maintainability.
This rule is aimed at flagging variables that are declared using let keyword, but never modified after the initial assignment.

```
//Bad:
let a = 3;
console.log(a);

//Good:
let a;
console.log(a);

```

[Source](http://eslint.org/docs/rules/prefer-const)
