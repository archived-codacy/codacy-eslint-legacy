//#Patterns: complexity


//#Warn: complexity
function a(x) {               /*error Function 'a' has a complexity of 3.*/
    if (true) {
        return x;
    } else if (false) {
        return x+1;
    } else {
        return 4; // 3rd path
    }
}


function a(x) {
    if (true) {
        return x;
    } else {
        return 4;
    }
}

