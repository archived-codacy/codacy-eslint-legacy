JavaScript allows the omission of curly braces when a block contains only one statement. However, it is considered by many to be best practice to never omit curly braces around blocks, even when they are optional, because it can lead to bugs and reduces code clarity. So the following:
Can be rewritten as:
There are, however, some who prefer to only use braces when there is more than one statement to be executed.

```
if (foo) foo++;

```

[Source](http://eslint.org/docs/rules/curly)
