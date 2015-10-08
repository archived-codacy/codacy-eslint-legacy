It is considered good practice to use the type-safe equality operators === and !== instead of their regular counterparts == and !=.
The reason for this is that == and != do type coercion which follows the rather obscure Abstract Equality Comparison Algorithm. For instance, the following statements are all considered true:
If one of those occurs in an innocent-looking statement such as a == b the actual problem is very difficult to spot.

```
/* eslint eqeqeq: 2 */ if (x == 42) {
}
/*error Expected '===' and instead saw '=='.*/ if ("" == text) {
}
/*error Expected '===' and instead saw '=='.*/ if (obj.getStuff() != undefined) {
}
/*error Expected '!==' and instead saw '!='.*/
```

[Source](http://eslint.org/docs/rules/eqeqeq)
