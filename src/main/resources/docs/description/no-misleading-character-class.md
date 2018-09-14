This rule reports the regular expressions which include multiple code point characters in character class syntax.

```
//Bad:
/^[Á]$/u
/^[❇️]$/u
/^[👶🏻]$/u
/^[🇯🇵]$/u
/^[👨‍👩‍👦]$/u
/^[👍]$/

//Good:
/^[abc]$/
/^[👍]$/u
```

[Source](http://eslint.org/docs/rules/no-misleading-character-class)
