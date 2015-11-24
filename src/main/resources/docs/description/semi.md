JavaScript is unique amongst the C-like languages in that it doesn't require semicolons at the end of each statement. In many cases, the JavaScript engine can determine that a semicolon should be in a certain spot and will automatically add it. This feature is known as automatic semicolon insertion (ASI) and is considered one of the more controversial features of JavaScript. On the first line, the JavaScript engine will automatically insert a semicolon, so this is not considered a syntax error. The JavaScript engine still knows how to interpret the line and knows that the line end indicates the end of the statement. In the debate over ASI, there are generally two schools of thought. The first is that we should treat ASI as if it didn't exist and always include semicolons manually. The rationale is that it's easier to always include semicolons than to try to remember when they are or are not required.

```
//Bad:
var name = "ESLint" 

//Good:
var website = "eslint.org";

```

[Source](http://eslint.org/docs/rules/semi)
