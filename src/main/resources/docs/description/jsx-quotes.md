JSX attribute values can contain string literals, which are delimited with single or double quotes.
Unlike string literals in JavaScript, string literals within JSX attributes can’t contain escaped quotes. If you want to have e.g. a double quote within a JSX attribute value, you have to use single quotes as string delimiter.
This rule takes one argument. If it is "prefer-double" then the rule enforces the usage of double quotes for all JSX attribute values which doesn’t contain a double quote. If "prefer-single" is configured then the rule enforces the usage of single quotes for all JSX attribute values which doesn’t contain a single quote.

```
//Bad with "prefer-single":
<a b="c" />
//Good with "prefer-single":
<a b='c' />
<a b="'" />

//Bad with "prefer-double":
<a b='c' />
//Good with "prefer-double":
<a b="c" />
<a b='"' />




```

[Source](http://eslint.org/docs/rules/jsx-quotes)
