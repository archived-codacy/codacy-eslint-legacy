When a statement is too long to fit on a single line, line breaks are generally inserted next to the operators separating expressions. The first style coming to mind would be to place the operator at the end of the line, following the english punctuation rules.
Some developers find that placing operators at the beginning of the line makes the code more readable.
The operator-linebreak rule is aimed at enforcing a particular operator line break style. As such, it warns whenever it sees a binary operator or assignment that does not adhere to a particular style: either placing linebreaks after or before the operators.

```
//Bad:
var fullHeight = borderTop + 
		innerHeight 
		+ borderBottom;
//Good:
var fullHeight = borderTop + 
		 innerHeight +
		 borderBottom;

```

[Source](http://eslint.org/docs/rules/operator-linebreak)
