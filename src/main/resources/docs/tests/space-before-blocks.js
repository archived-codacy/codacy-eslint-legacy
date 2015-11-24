//#Patterns: space-before-blocks

//#Info: space-before-blocks
if (a){           
    b();
}

if (a) {
    b();
//#Info: space-before-blocks
} else{           
    c();
}

if (a) {
    b();
}

function a() {}

for (;;) {
    b();
}
