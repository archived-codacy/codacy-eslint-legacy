This rule prevents the use of delete operator on variables:
The delete operator will only delete the properties of objects. It cannot "delete" variables or anything else. Using them on variables might lead to unexpected behavior.
This rule was introduced in ESLint 0.0.9.

```
delete x;
```

[Source](http://eslint.org/docs/rules/no-delete-var)
