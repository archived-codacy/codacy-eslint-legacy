This rule generates warnings for nodes which do not have JSDoc comments. It considered a good practice to document the behavior of different nodes to help engineers understand the functionality of the node.

```
//Bad:
function foo() {
    return 10;
}

//Good:
/**
* It returns 10
*/
function foo() {
    return 10;
}

/**
* It returns 10
*/
var foo = function() {
    return 10;
}


```

[Source](http://eslint.org/docs/rules/require-jsdoc)
