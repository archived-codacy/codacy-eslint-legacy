This rule generates warnings for nodes which do not have JSDoc comments. It considered a good practice to document the behavior of different nodes to help engineers understand the functionality of the node. Supported nodes:
The following patterns are considered problems:
The following patterns are not considered problems:

```
/*eslint require-jsdoc: 2*/ function foo() {
/*error Missing JSDoc comment.*/ return 10;
}

```

[Source](http://eslint.org/docs/rules/require-jsdoc)
