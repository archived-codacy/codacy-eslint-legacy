A switch statements with duplicate case labels is normally an indication of a programmer error.
In the following example the 3rd case label uses again the literal 1 that has already been used in the first case label. Most likely the case block was copied from above and it was forgotten to change the literal.
This inspection reports any duplicated case labels on JavaScript switch statements.

```
//Bad:
var a = 1;
switch (a) {
	case 1: break;
	case 2: break;
	case 1:
	default: break;
}

```

[Source](http://eslint.org/docs/rules/no-duplicate-case)
