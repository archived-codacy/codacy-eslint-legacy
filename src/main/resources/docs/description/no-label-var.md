This rule aims to create clearer code by disallowing the bad practice of creating a label that shares a name with a variable that is in scope.
The following patterns are considered problems:
The following patterns are not considered problems:

```
/*eslint no-label-var: 2*/ var x = foo;
function bar() {
x: /*error Found identifier with same name as label.*/ for (;
;
) {
break x;
}
}

```

[Source](http://eslint.org/docs/rules/no-label-var)
