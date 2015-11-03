//#Patterns: constructor-super

//#Warn: constructor-super
class A extends null {
    constructor() {
        super();       /*error unexpected `super()`.*/
    }
}

class A extends null {
    constructor() { }
}
