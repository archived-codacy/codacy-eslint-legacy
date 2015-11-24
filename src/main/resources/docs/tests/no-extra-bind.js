//#Patterns: no-extra-bind

//#Info: no-extra-bind
var x = function () {   
    (function () {
      this.foo();
    }());

}.bind(bar);

var x = function () {
    this.foo();
}.bind(bar); 
