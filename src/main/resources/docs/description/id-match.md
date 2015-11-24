Naming things consistently in a project is an often underestimated aspect of code creation. When done right, it can save your team hours of unnecessary head scratching and misdirections. This rule allows you to precisely define and enforce the variables and function names on your team should use. No more limiting yourself to camelCase, snake_case, PascalCase or oHungarianNotation. Id-match has all your needs covered!
This rule compares assignments and function definitions to a provided regular expression, giving you the maximum flexibility on the matter. It doesn't apply to function calls, so that you can still use functions or objects you do not have control over.
This rule needs a text RegExp to operate with, and accepts an options map.
This pattern has a argument "properties" that if set to true will will check all properties names.

```
//Bad:

var my_favorite_color = "#112C85"; /*error Identifier 'my_favorite_color' does not match the pattern '^[a-z]+([A-Z][a-z]+)*$'.*/

var _myFavoriteColor  = "#112C85"; /*error Identifier '_myFavoriteColor' does not match the pattern '^[a-z]+([A-Z][a-z]+)*$'.*/

var myFavoriteColor_  = "#112C85"; /*error Identifier 'myFavoriteColor_' does not match the pattern '^[a-z]+([A-Z][a-z]+)*$'.*/

var MY_FAVORITE_COLOR = "#112C85"; /*error Identifier 'MY_FAVORITE_COLOR' does not match the pattern '^[a-z]+([A-Z][a-z]+)*$'.*/
```

[Source](http://eslint.org/docs/rules/id-match)
