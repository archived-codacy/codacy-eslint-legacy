Comparing to null without a type-checking operator (== or !=), can have unintended results as the comparison will evaluate to true when comparing to not just a null, but also an undefined value. The no-eq-null rule aims reduce potential bug and unwanted behavior by ensuring that comparisons to null only match null, and not also undefined. As such it will flag comparisons to null when using == and !=.

```
//Bad:
if (foo == null) {
	bar();
}
//Good:
if (foo === null) {
	bar();
}

```

[Source](http://eslint.org/docs/rules/no-eq-null)
