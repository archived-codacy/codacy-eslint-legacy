Invalid or irregular whitespace causes issues with ECMAScript 5 parsers and also makes code harder to debug in a similar nature to mixed tabs and spaces.
Various whitespace characters can be inputted by programmers by mistake for example from copying or keyboard shortcuts. Pressing Alt + Space on OS X adds in a non breaking space character for example.
Known issues these spaces cause:

* Zero Width Space
  * Is NOT considered a separator for tokens and is often parsed as an Unexpected token ILLEGAL
Is NOT shown in modern browsers making code repository software expected to resolve the visualisation
* Line Separator
  * Is NOT a valid character within JSON which would cause parse errors

With this rule enabled the following characters will cause warnings outside of strings:

```
\u000B - Line Tabulation (\v) - <VT>
\u000C - Form Feed (\f) - <FF>
\u00A0 - No-Break Space - <NBSP>
\u0085 - Next Line
\u1680 - Ogham Space Mark
\u180E - Mongolian Vowel Separator - <MVS>
\ufeff - Zero Width No-Break Space - <BOM>
\u2000 - En Quad
\u2001 - Em Quad
\u2002 - En Space - <ENSP>
\u2003 - Em Space - <EMSP>
\u2004 - Tree-Per-Em
\u2005 - Four-Per-Em
\u2006 - Six-Per-Em
\u2007 - Figure Space
\u2008 - Punctuation Space - <PUNCSP>
\u2009 - Thin Space
\u200A - Hair Space
\u200B - Zero Width Space - <ZWSP>
\u2028 - Line Separator
\u2029 - Paragraph Separator
\u202F - Narrow No-Break Space
\u205f - Medium Mathematical Space
\u3000 - Ideographic Space
```

The following examples are considered problems:

```
/*eslint no-irregular-whitespace: 2*/

function thing() /*<NBSP>*/{ /*error Irregular whitespace not allowed*/
  return 'test';
}

function thing( /*<NBSP>*/){ /*error Irregular whitespace not allowed*/
  return 'test';
}

function thing /*<NBSP>*/(){ /*error Irregular whitespace not allowed*/
  return 'test';
}

function thing᠎/*<MVS>*/(){   /*error Irregular whitespace not allowed*/
  return 'test';
}

function thing() {
  return 'test'; /*<ENSP>*/  /*error Irregular whitespace not allowed*/
}

function thing() {
  return 'test'; /*<NBSP>*/  /*error Irregular whitespace not allowed*/
}
```

[Source](http://eslint.org/docs/rules/no-irregular-whitespace)
