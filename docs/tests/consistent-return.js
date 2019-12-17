//#Patterns: consistent-return



function doSomething(condition) {
    if (condition) {
        return true;
    } else {
	//#Info: consistent-return
        return;      
    }
}

function doSomething2(condition) {

    if (condition) {
        return true;
    } else {
        return false;
    }
}

