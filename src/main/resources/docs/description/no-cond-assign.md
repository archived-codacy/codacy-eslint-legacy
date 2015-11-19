In conditional statements, it is very easy to mistype a comparison operator (such as ==) as an assignment operator (such as =). For example:
There are valid reasons to use assignment operators in conditional statements. However, it can be difficult to tell whether a specific assignment was intentional.
This rule is aimed at eliminating ambiguous assignments in for, if, while, and do...while conditional statements.
The rule takes one option, a string, which must contain one of the following values:
except-parens (default): Disallow assignments unless they are enclosed in parentheses.
always: Disallow all assignments.

```
//Bad:
var x;
if (x = 0) {
    var b = 1;
}

//Good:
var x;
if (x == 0) {
    var b = 1;
}

```

[Source](http://eslint.org/docs/rules/no-cond-assign)
