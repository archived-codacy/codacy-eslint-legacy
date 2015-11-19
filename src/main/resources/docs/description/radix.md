When using the parseInt() function it is common to omit the second argument, the radix, and let the function try to determine from the first argument what type of number it is. By default, parseInt() will autodetect decimal and hexadecimal (via 0x prefix). Prior to ECMAScript 5, parseInt() also autodetected octal literals, which caused problems because many developers assumed a leading 0 would be ignored.
This confusion led to the suggestion that you always use the radix parameter to parseInt() to eliminate unintended consequences. 


```
//Bad:
var num = parseInt("071");

//Good:
var num = parseInt("071", 10);
```

[Source](http://eslint.org/docs/rules/radix)
