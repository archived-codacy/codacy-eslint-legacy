Require spaces following return, throw, and case.
Fixable: This rule is automatically fixable using the --fix flag on the command line.

```
//Bad:
throw{a:0};
function f(){ return-a; };
switch(a){ case'a': break; };

//Good:
throw {a: 0};
function f(){ return -a; }
switch(a){ case 'a': break; }

```

[Source](http://eslint.org/docs/rules/space-return-throw-case)
