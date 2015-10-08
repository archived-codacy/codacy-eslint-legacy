Sometimes in the course of editing files, you can end up with extra whitespace at the end of lines. These whitespace differences can be picked up by source control systems and flagged as diffs, causing frustration for developers. While this extra whitespace causes no functional issues, many code conventions require that trailing spaces be removed before checkin.
Fixable: This rule is automatically fixable using the --fix flag on the command line.
The following patterns are considered problems:

```
/*eslint no-trailing-spaces: 2*/ // spaces, tabs and unicode whitespaces // are not allowed at the end of lines var foo = 0;
//••••• /*error Trailing spaces not allowed.*/ var baz = 5;
//•• /*error Trailing spaces not allowed.*/
```

[Source](http://eslint.org/docs/rules/no-trailing-spaces)
