In contexts such as an if statement's test where the result of the expression will already be coerced to a Boolean, casting to a Boolean via double negation (!!) is unnecessary. For example, these if statements are equivalent:
This rule aims to eliminate the use of double-negation Boolean casts in an already Boolean context.
The following patterns are considered problems:

```
if (!!foo) {
// ... }
if (foo) {
// ... }

```

[Source](http://eslint.org/docs/rules/no-extra-boolean-cast)
