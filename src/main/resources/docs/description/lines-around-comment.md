Many style guides require empty lines before or after comments. The primary goal of these rules is to make the comments easier to read and improve readability of the code.
This rule allows you to specify whether an empty line should be found before or after a comment. It can be enabled separately for both block (/*) and line (//) comments, and does not apply to comments that appear on the same line as code.
By default an empty line is required above a block comment, such as in the following example:

```
var x = 0;

/** 
 * The vertical position.
 */ 
var y = 10;

```
The following would not pass the rule:

```
var x = 0;
/* the vertical position */
var y = 10;

```

[Source](http://eslint.org/docs/rules/lines-around-comment)
