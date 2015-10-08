Consistency is an important part of any style guide. While it is a personal preference where to put the opening brace of blocks, it should be consistent across a whole project. Having an inconsistent style distracts the reader from seeing the important parts of the code.
Fixable: This rule is automatically fixable using the --fix flag on the command line.
This rule will enforce consistency of spacing before blocks. It is only applied on blocks that don’t begin on a new line.

```
/*eslint space-before-blocks: 2*/ if (a){
/*error Missing space before opening brace.*/ b();
}
if (a) {
b();
}
else{
/*error Missing space before opening brace.*/ c();
}
function a(){
}
/*error Missing space before opening brace.*/ for (;
;
){
/*error Missing space before opening brace.*/ b();
}
try {
}
catch(a){
}
/*error Missing space before opening brace.*/
```

[Source](http://eslint.org/docs/rules/space-before-blocks)
