As far as naming conventions for identifiers go, dangling underscores may be the most polarizing in JavaScript. Dangling underscores are underscores at either the beginning or end of an identifier.
There is actually a long history of using dangling underscores to indicate "private" members of objects in JavaScript (though JavaScript doesn't have truly private members, this convention served as a warning). The intent with the underscores was to make it obvious that this method was special in some way. Since that time, using a single underscore prefix has become popular as a way to indicate "private" members of objects. Whether or not you choose to allow dangling underscores in identifiers is purely a convention and has no effect on performance, readability, or complexity. It's purely a preference.

```
//Bad:
var foo_;
var __proto__ = {};
foo._bar(); 

```

[Source](http://eslint.org/docs/rules/no-underscore-dangle)
