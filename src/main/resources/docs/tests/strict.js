//#Patterns: strict : {"unnamedParam":"function"}

//#Info: strict
"use strict";

var bar = function() {
    "use strict";
    return;
};

//#Info: strict
var bar = function() {
    return;
};
