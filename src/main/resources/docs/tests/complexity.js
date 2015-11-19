//#Patterns: complexity
 

function a(x) {               
    if (true) {
        return x;
    } else if (false) {
        return x+1;
//#Warn: complexity
    } else {
        return 4;
    }
}

