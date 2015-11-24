Some style guides require or disallow a whitespace immediately after the initial // or /* of a comment. Whitespace after the // or /* makes it easier to read text in comments. On the other hand, commenting out code is easier without having to put a whitespace right after the // or /*. This rule will enforce consistency of spacing after the start of a comment // or /*. It also provides several exceptions for various documentation styles. The rule takes two options. The first is a string which be either "always" or "never". If you pass "always" then the // or /* must be followed by at least once whitespace. If "never" then there should be no whitespace following. The default is "always".

```
//Good with parameter always:

// This is a comment with a whitespace at the beginning
/* This is a comment with a whitespace at the beginning */
/* \nThis is a comment with a whitespace at the beginning */

//Bad:
//This is a comment with a whitespace at the beginning
/*This is a comment with a whitespace at the beginning */
/*\nThis is a comment with a whitespace at the beginning */
```

[Source](http://eslint.org/docs/rules/spaced-comment)
