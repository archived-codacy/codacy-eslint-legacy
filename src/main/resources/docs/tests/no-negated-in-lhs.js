//#Patterns: no-negated-in-lhs

//#Warn: no-negated-in-lhs
if(!a in b) {
    // do something
}


if(!(a in b)) {
    // do something
}

if(('' + !a) in b) {
    // do something
}
