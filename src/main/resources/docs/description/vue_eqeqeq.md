Require the use of === and !==

This rule is the same rule as core eqeqeq rule but it applies to the expressions in `<template>`.

```
//Bad:
	a == b 
	foo == true
	bananas != 1
	value == undefined
	
//Good:
	typeof foo === 'undefined'
	'hello' !== 'world'
	0 === 0
	true === true
	foo === null
```

[Source](https://eslint.vuejs.org/rules/eqeqeq.html#vue-eqeqeq)
