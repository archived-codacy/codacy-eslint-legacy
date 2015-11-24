While formatting preferences are very personal, a number of style guides require or disallow spaces between computed properties in the following situations:
Fixable: This rule is automatically fixable using the --fix flag on the command line.
This rule aims to maintain consistency around the spacing inside of computed properties.

``` 
// Bad:
	obj[foo ];
	obj[ 'foo'];
	var x = {[ b ]: a} ;
	obj[foo[ bar ]];
// Good:
	obj[foo];
	obj['foo'];
	var x = {[b]: a} ;
	obj[foo[ bar]];


```

[Source](http://eslint.org/docs/rules/computed-property-spacing)
