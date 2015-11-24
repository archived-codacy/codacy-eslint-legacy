Trailing newlines in non-empty files are a common UNIX idiom. Benefits of trailing newlines include the ability to concatenate or append to files as well as output files to the terminal without interfering with shell prompts. This rule enforces newlines for all non-empty programs.
Prior to v0.16.0 this rule also enforced that there was only a single line at the end of the file. If you still want this behaviour, consider enabling no-multiple-empty-lines and/or no-trailing-spaces.
Fixable: This rule is automatically fixable using the --fix flag on the command line.

```
//Bad:
function doSmth() {
var foo = 2;
}
//Good:
function doSmth() {
  var foo = 2;
}
// spaces here

```

[Source](http://eslint.org/docs/rules/eol-last)
