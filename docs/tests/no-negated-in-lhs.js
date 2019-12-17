//#Patterns: no-negated-in-lhs

//#Err: no-negated-in-lhs
if(!a in b) {
    // do something
}


if(!(a in b)) {
    // do something
}

if(('' + !a) in b) {
    // do something
}
