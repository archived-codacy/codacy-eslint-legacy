As of today there is no consistency in separating variable declarations from the rest of the code. Some developers leave an empty line between var statements and the rest of the code like:
Whereas others don't leave any empty newlines at all.
The problem is when these developers work together in a project. This rule enforces a coding style where empty newlines are allowed or disallowed after var, let, or const statements. It helps the code to look consistent across the entire project.

```
var foo;
// do something with foo
```

[Source](http://eslint.org/docs/rules/newline-after-var)
