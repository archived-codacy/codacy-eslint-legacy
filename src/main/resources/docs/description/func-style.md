There are two ways of defining functions in JavaScript: function declarations and function expressions. Declarations have the function keyword first, followed by a name, followed by its arguments and the function body, such as:
Equivalent function expressions begin with the var keyword, followed by a name, and then the function itself, such as:
The primary difference between function declarations and function expressions is that declarations are hoisted to the top of the scope in which they are defined, which allows you to write code that uses the function before the declaration. 
This rule acepts one parameter as "declaration" or "expression"

```
//Bad with parameter "declaration":
var foo = function() { 
    // ...
function foo() { 
    // ...
}
//Good with parameter "declaration":
function foo() {
    // ...
}


//Bad with parameter "expression":
function foo() { 
    // ...
}
//Good with parameter "expression":
var foo = function() {
    // ...
};

```

[Source](http://eslint.org/docs/rules/func-style)
