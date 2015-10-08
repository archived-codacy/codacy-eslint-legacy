In conditional statements, it is very easy to mistype a comparison operator (such as ==) as an assignment operator (such as =). For example:
There are valid reasons to use assignment operators in conditional statements. However, it can be difficult to tell whether a specific assignment was intentional.
This rule is aimed at eliminating ambiguous assignments in for, if, while, and do...while conditional statements.

```
// Check the user's job title if (user.jobTitle = "manager") {
// user.jobTitle is now incorrect }

```

[Source](http://eslint.org/docs/rules/no-cond-assign)
