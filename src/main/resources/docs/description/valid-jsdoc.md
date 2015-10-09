JSDoc is a JavaScript API documentation generator. It uses specially-formatted comments inside of code to generate API documentation automatically. For example, this is what a JSDoc comment looks like for a function:

```
/**
 * Adds two numbers together.
 * @param {int} num1 The first number.
 * @param {int} num2 The second number.
 * @returns {int} The sum of the two numbers.
 */
function sum(num1, num2) {
    return num1 + num2;
}
```

The JSDoc comments have a syntax all their own, and it is easy to mistakenly mistype a comment because comments aren't often checked for correctness in editors. Further, it's very easy for the function definition to get out of sync with the comments, making the comments a source of confusion and error.

This rule aims to prevent invalid and incomplete JSDoc comments. In doing so, it will warn when:

* There is a JSDoc syntax error
* A @param or @returns is used without a type specified
* A @param or @returns is used without a description
* A comment for a function is missing @returns
* A parameter has no associated @param in the JSDoc comment
* @params are out of order with named arguments

The following patterns are considered problems:

```
/*eslint valid-jsdoc: 2*/

// missing type for @param and missing @returns
/**                                 // 2 errors
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

// no description for @returns
/**                                 //error Missing JSDoc return description.
 * A description
 * @returns {int}
 */
function foo() {
    // ...
}

// no type for @returns
/**                                 //error JSDoc syntax error.
 * A description
 * @returns Something awesome
 */
function foo() {
    // ...
}

// missing @param
/**                                 //error Missing JSDoc for parameter 'a'.
 * A description
 * @returns {void}
 */
function foo(a) {
    // ...
}

// incorrect @param
/**                                 //error Expected JSDoc for 'a' but found 'b'.
 * A description
 * @param {string} b Desc
 * @returns {void}
 */
function foo(a) {
    // ...
}
```

[Source](http://eslint.org/docs/rules/valid-jsdoc)
