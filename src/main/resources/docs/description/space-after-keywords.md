Some style guides will require or disallow spaces following the certain keywords.This rule will enforce consistency of spacing after the keywords if, else, for, while, do, switch, try, catch, finally, and with.
Fixable: This rule is automatically fixable using the --fix flag on the command line.

```
//Bad:
if(a) {}         /*error Keyword "if" must be followed by whitespace.*/
if (a) {} else{} /*error Keyword "else" must be followed by whitespace.*/
do{} while (a);  /*error Keyword "do" must be followed by whitespace.*/

//Good:
if (a) {}
if (a) {} else {}
```

[Source](http://eslint.org/docs/rules/space-after-keywords)
