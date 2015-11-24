Some developers prefer to have multiple blank lines removed, while others feel that it helps improve readability. Whitespace is useful for separating logical sections of code, but excess whitespace takes up more of the screen.
This rule aims to reduce the scrolling required when reading through your code. It will warn when the maximum amount of empty lines has been exceeded.
You can configure the depth as an option by using the second argument in your configuration. 

```
//Bad with 2 lines as maximum.
var foo = 5;


                  /*error Multiple blank lines not allowed.*/
var bar = 3;

//Good with 2 lines:
var foo = 5;

var bar = 3;
```

[Source](http://eslint.org/docs/rules/no-multiple-empty-lines)
