//#Patterns: valid-jsdoc
//#Issue: {"severity": "Err", "line": 7, "patternId": "valid-jsdoc"}
//#Issue: {"severity": "Err", "line": 14, "patternId": "valid-jsdoc"}

/**                                 //error Missing JSDoc parameter description for 'num1'.
 * A description
 * @param {int} num1
 * @returns {void}
 */
function foo(num1) {
  // ...
}

/**                                 //error JSDoc syntax error.
 * A description
 * @returns Something awesome
 */
function foo2() {
  // ...
}
