//#Patterns: consistent-return

//#Err: consistent-return
function doSomething(condition) {

    if (condition) {
        return true;
    } else {
        return;      /*error Expected a return value.*/
    }
}

function doSomething(condition) {

    if (condition) {
        return;
    } else {
        return;      /*error Expected a return value.*/
    }
}
