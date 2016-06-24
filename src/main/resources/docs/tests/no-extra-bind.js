//#Patterns: no-extra-bind

// useless bind
var boundGetName = (function getName() {
  return "ESLint";
//#Info: no-extra-bind
}).bind({ name: "ESLint" });

console.log(boundGetName());

var boundGetName = (function getName() {
  return this.name;
}).bind({ name: "ESLint" });

console.log(boundGetName());
