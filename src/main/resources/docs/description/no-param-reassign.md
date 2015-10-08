Assignment to variables declared as function parameters can be misleading and lead to confusing behavior, as modifying function parameters will also mutate the arguments object. Often, assignment to function parameters is unintended and indicative of a mistake or programmer error.
This rule aims to prevent unintended behavior caused by overwriting function parameters.
This rule takes one option, an object, with a property "props".

```
http://eslint.org/docs/rules/no-param-reassign
```

[Source](http://eslint.org/docs/rules/no-param-reassign)
