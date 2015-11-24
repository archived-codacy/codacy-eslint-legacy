Consistency is an important part of any style guide. While it is a personal preference where to put the opening brace of blocks, it should be consistent across a whole project. Having an inconsistent style distracts the reader from seeing the important parts of the code.This rule will enforce consistency of spacing before blocks. It is only applied on blocks that don’t begin on a new line.
Fixable: This rule is automatically fixable using the --fix flag on the command line.


```
//Bad:
if (a){
}

if (a){
}

//Good:
if (a) {
}

function a() {}

for (;;) {
}
```

[Source](http://eslint.org/docs/rules/space-before-blocks)
