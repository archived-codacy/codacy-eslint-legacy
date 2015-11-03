//#Patterns: valid-typeof
//#Warn: valid-typeof

/*eslint valid-typeof: 2*/ typeof foo === "strnig" /*error Invalid typeof comparison value*/ typeof foo == "undefimed" /*error Invalid typeof comparison value*/ typeof bar != "nunber" /*error Invalid typeof comparison value*/ typeof bar !== "fucntion" /*error Invalid typeof comparison value*/