//#Patterns: no-extra-bind
//#Warn: no-extra-bind

var boundGetName = (function getName() { return this.name; }).bind({ name: "ESLint" }); console.log(boundGetName()); // "ESLint"