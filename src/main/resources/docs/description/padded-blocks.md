Some style guides require block statements to start and end with blank lines. The goal is to improve readability by visually separating the block content and the surrounding code. Since it's good to have a consistent code style, you should either always write padded blocks or never do it. This rule enforces consistent padding within blocks.

```
//Bad:
if (a) {
    b();
}


//Good:
if (a) {

    b();

}
```

[Source](http://eslint.org/docs/rules/padded-blocks)
