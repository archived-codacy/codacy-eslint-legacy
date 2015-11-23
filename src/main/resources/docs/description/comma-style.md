Comma Style rule enforces comma styles for a list of things separated by commas. There are two comma styles primarily in JavaScript. The standard one in which commas are placed at the end of the line. And Comma-First, in which, commas are placed at the start of the next line after the list item.
One of the justifications for using Comma-First is that it helps tracking missing and trailing commas. In case linting is turned off, missing commas in variable declarations lead to leakage of global variables and trailing commas lead to errors in older versions of IE.
This rule is aimed at enforcing a particular comma style in JavaScript. As such, it warns whenever it sees a variable declaration, object property and array element that does not adhere to a particular comma style. It doesn't support cases where there are line breaks before and after comma (lone commas) with in declarations, properties and elements. It also avoids single line declaration cases.

```
//Bad:
var foo = 1
  , bar = 2; 

//Good 
var foo = 1,
    bar = 2; 
```

[Source](http://eslint.org/docs/rules/comma-style)
