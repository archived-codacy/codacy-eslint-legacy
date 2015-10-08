It is often necessary to capture the current execution context in order to make it available subsequently. A prominent example of this are jQuery callbacks:
There are many commonly used aliases for this such as self, that or me. It is desirable to ensure that whichever alias the team agrees upon is used consistently throughout the application.
This rule designates a variable as the chosen alias for this. It then enforces two things:

```
var self = this;
jQuery('li').click(function (event) {
// here, "this" is the HTMLElement where the click event occurred self.setFoo(42);
}
);

```

[Source](http://eslint.org/docs/rules/consistent-this)
