Often code is marked during development process for later work on it or with additional thoughts. Examples are typically // TODO: do something or // FIXME: this is not a good idea. These comments are a warning signal, that there is something not production ready in your code. Most likely you want to fix it or remove the comments before you roll out your code with a good feeling.
This rule can be used to help finding these warning-comments. It can be configured with an array of terms you don't want to exist in your code. It will raise a warning when one or more of the configured warning-comments are present in the checked files.

```
//Bad:
// TODO: this
// todo: this too
// Even this: TODO

```

[Source](http://eslint.org/docs/rules/no-warning-comments)
