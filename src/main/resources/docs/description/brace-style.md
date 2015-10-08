Brace style is closely related to indent style in programming and describes the placement of curly braces relative to their control statement and body. There are probably a dozen, if not more, brace styles in the world.
The one true brace style is one of the most common brace styles in JavaScript, in which the opening curly brace of a block is placed on the same line as its corresponding statement or declaration. For example:
One common variant of one true brace style is called Stroustrup, in which the else statements in an if-else construct, as well as catch and finally, must be on its own line after the preceding closing brace, as in this example:

```
if (foo) {
bar();
}
else {
baz();
}

```

[Source](http://eslint.org/docs/rules/brace-style)
