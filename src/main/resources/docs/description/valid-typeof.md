For a vast majority of use-cases, the only valid results of the typeof operator will be one of the following: "undefined", "object", "boolean", "number", "string", and "function". When the result of a typeof operation is compared against a string that is not one of these strings, it is usually a typo. This rule ensures that when the result of a typeof operation is compared against a string, that string is in the aforementioned set.
This rule aims to prevent errors from likely typos by ensuring that when the result of a typeof operation is compared against a string, that the string is a valid value.
The following patterns are considered problems:

```
//Bad:
typeof foo === "strnig"
typeof foo == "undefimed"
typeof bar != "nunber"
typeof bar !== "fucntion"

//Good:
typeof foo === "string"
typeof foo == "undefined"
typeof bar != "number"
typeof bar !== "function"

```

[Source](http://eslint.org/docs/rules/valid-typeof)
