//#Patterns: strict : {"unnamedParam":"function"}

//#Err: strict
"use strict";

var bar = function() {
    //#Err: strict
    "use strict";
    return;
};

var bar = function() {
    return;
};
