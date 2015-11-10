//#Patterns: consistent-return


//#Err: consistent-return
function doSomething(condition) {
    if (condition) {
        return true;
    } else {
        return;      
    }
}


