//#Patterns: space-before-blocks
//#Warn: space-before-blocks

/*eslint space-before-blocks: 2*/ if (a){ /*error Missing space before opening brace.*/ b(); } if (a) { b(); } else{ /*error Missing space before opening brace.*/ c(); } function a(){} /*error Missing space before opening brace.*/ for (;;){ /*error Missing space before opening brace.*/ b(); } try {} catch(a){} /*error Missing space before opening brace.*/