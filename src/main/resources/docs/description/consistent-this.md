It is often necessary to capture the current execution context in order to make it available subsequently. A prominent example of this are jQuery callbacks:
There are many commonly used aliases for this such as self, that or me. It is desirable to ensure that whichever alias the team agrees upon is used consistently throughout the application.
This rule designates a variable as the chosen alias for this.
This rule takes one option, a string, which is the designated this variable.

```
//Bad:
	var self = 42;   /*error Designated alias 'self' is not assigned to 'this'.*/
	var that = this; /*error Unexpected alias 'that' for 'this'.*/

//Good:
var self = this;
	jQuery('li').click(function (event) {
	// here, "this" is the HTMLElement where the click event occurred 
	self.setFoo(42);
	};
```

[Source](http://eslint.org/docs/rules/consistent-this)
