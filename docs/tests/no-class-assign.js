//#Patterns: no-class-assign


class A {
    b() {
//#Warn: no-class-assign
        A = 0;
    }
}

let B = class B { }
B = 0; 
