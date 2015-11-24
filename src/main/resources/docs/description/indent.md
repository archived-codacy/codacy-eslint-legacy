This option validates a specific tab width for your code in block statements.
There are several common guidelines which require specific indentation of nested blocks and statements.
This is the most common scenarios recommended in different style guides: two spaces, four spaces, one tab.

```
//Bad with two spaces:
if (a) {
   b=c;
function foo(d) {
       e=f;
}
}
Good with two spaces:
if (a) {
  b=c;
  function foo(d) {
    e=f;
  }
}

```

[Source](http://eslint.org/docs/rules/indent)
