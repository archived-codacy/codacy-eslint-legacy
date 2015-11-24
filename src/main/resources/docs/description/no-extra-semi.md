JavaScript will more or less let you put semicolons after any statement without complaining. Typos and misunderstandings about where semicolons are required can lead to extra semicolons that are unnecessary. This rule is aimed at eliminating extra unnecessary semicolons. While not technically an error, extra semicolons can be a source of confusion when reading code.
Fixable: This rule is automatically fixable using the --fix flag on the command line.

```
//Bad:
var x = 5;; 
function foo() {
	// code
}; /*error Unnecessary semicolon.*/

```

[Source](http://eslint.org/docs/rules/no-extra-semi)
