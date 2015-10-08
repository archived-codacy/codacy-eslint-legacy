Require spaces following return, throw, and case.
Fixable: This rule is automatically fixable using the --fix flag on the command line.
The following patterns are considered problems:

```
/*eslint space-return-throw-case: 2*/ throw{
a:0}
/*error Keyword "throw" must be followed by whitespace.*/ function f(){
return-a;
}
/*error Keyword "return" must be followed by whitespace.*/ switch(a){
case'a': break;
}
/*error Keyword "case" must be followed by whitespace.*/
```

[Source](http://eslint.org/docs/rules/space-return-throw-case)
