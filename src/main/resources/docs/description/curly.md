JavaScript allows the omission of curly braces when a block contains only one statement. However, it is considered by many to be best practice to never omit curly braces around blocks, even when they are optional, because it can lead to bugs and reduces code clarity. So the following:

```
//Bad
if (foo) foo++;
```

Can be rewritten as:

```
//Good
if (foo) {
    foo++;
}
```

There are, however, some who prefer to only use braces when there is more than one statement to be executed.
You can customize this pattern to match your expectations.
You can change the bracesConvention to "multi", "multi-line" or "multi-or-nest".
For a detailed explanation about the available options, follow the link.

[Source](http://eslint.org/docs/rules/curly)
