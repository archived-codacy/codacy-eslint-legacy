Sometimes in the course of editing files, you can end up with extra whitespace at the end of lines. These whitespace differences can be picked up by source control systems and flagged as diffs, causing frustration for developers. While this extra whitespace causes no functional issues, many code conventions require that trailing spaces be removed before checkin.This rule has a pattern named skipBlankLines, When set to true, the rule will not flag any lines that are made up purely of whitespace.
Fixable: This rule is automatically fixable using the --fix flag on the command line.


```
//Bad:
var foo = 0;//•••••  /*error Trailing spaces not allowed.*/
var baz = 5;//••     /*error Trailing spaces not allowed.*/


```

[Source](http://eslint.org/docs/rules/no-trailing-spaces)
