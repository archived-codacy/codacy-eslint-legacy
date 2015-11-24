Spacing around commas improve readability of a list of items. Although most of the style guidelines for languages prescribe adding a space after a comma and not before it, it is subjective to the preferences of a project.
This rule aims to enforce spacing around a comma. As such, it warns whenever it sees a missing or unwanted space in commas of variable declaration, object property, function parameter, sequence and array element.
The rule takes one option, an object, which has two keys before and after having boolean values true or false. If before is true, space is enforced before commas and if it's false, space is disallowed before commas. If after is true, space is enforced after commas and if it's false, space is disallowed after commas. The default is {"before": false, "after": true}.

```
//by default:
//Good:
var foo = 1, bar = 2;
//Bad:
var foo = 1 ,bar = 2;

```

[Source](http://eslint.org/docs/rules/comma-spacing)
