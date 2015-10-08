ES5 §15.1.1 Value Properties of the Global Object (NaN, Infinity, undefined) as well as strict mode restricted identifiers eval and arguments are considered to be restricted names in JavaScript. Defining them to mean something else can have unintended consequences and confuse others reading the code. For example, there's nothing prevent you from writing:
Then any code used within the same scope would not get the global undefined, but rather the local version with a very different meaning.
The following patterns are considered problems:

```
var undefined = "foo";

```

[Source](http://eslint.org/docs/rules/no-shadow-restricted-names)
