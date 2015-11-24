Comparing a literal expression in a condition is usually a typo or development trigger for a specific behavior.
This pattern is most likely an error and should be avoided.
The rule is aimed at preventing the use of a constant expression in a condition. As such, it warns whenever it sees a constant expression inside a condition expression.

```
//Bad:
if (false) {
	doSomethingUnfinished();
}

```

[Source](http://eslint.org/docs/rules/no-constant-condition)
