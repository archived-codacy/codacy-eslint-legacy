//#Patterns: no-duplicate-case
//#Warn: no-duplicate-case

var a = 1; switch (a) { case 1: break; case 2: break; case 1: // duplicate literal 1 break; default: break; }