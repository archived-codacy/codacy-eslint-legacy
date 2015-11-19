JSDoc is a JavaScript API documentation generator. It uses specially-formatted comments inside of code to generate API documentation automatically. For example, this is what a JSDoc comment looks like for a function: The JSDoc comments have a syntax all their own, and it is easy to mistakenly mistype a comment because comments aren't often checked for correctness in editors. Further, it's very easy for the function definition to get out of sync with the comments, making the comments a source of confusion and error.
This rule aims to prevent invalid and incomplete JSDoc comments. 

```
//Bad:
/** 
 * A description
 * @param num1 The first number.
 */
function foo(num1) {
    // ...
}

// missing description for @param
/**                                 //error Missing JSDoc parameter description for 'num1'.
 * A description
 * @param {int} num1
 * @returns {void}
 */
function foo(num1) {
    // ...
}

//Good:
/**
 * Adds two numbers together.
 * @param {int} num1 The first number.
 * @param {int} num2 The second number.
 * @returns {int} The sum of the two numbers.
 */
function foo(num1, num2) {
    return num1 + num2;
}
```

[Source](http://eslint.org/docs/rules/valid-jsdoc)
