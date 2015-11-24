Some style guides disallow a comments on the same line as code. If there are comments immediately following code, it can make it harder to read the code. On the other hand, it is sometimes faster and more obvious to put comments immediately following code. This rule will disallow comments on the same line as code.

```
//Bad:
var a = 1;// declaring a to 1 
 function getRandomNumber(){
	return 4; // chosen by fair dice roll. 
 }

Good:
//declaring a to 1
var a = 1;

```

[Source](http://eslint.org/docs/rules/no-inline-comments)
