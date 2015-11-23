ClassDeclaration creates a variable, and we can modify the variable.
But the modification is a mistake in most cases.
This rule is aimed to flag modifying variables of class declarations.

```
//Bad:
class A {
}
A = 0;

```

[Source](http://eslint.org/docs/rules/no-class-assign)
