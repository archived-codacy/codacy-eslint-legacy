//#Patterns: no-extra-parens
//#Warn: no-extra-parens

/*eslint no-extra-parens: 2*/ a = (b * c); /*error Gratuitous parentheses around expression.*/ (a * b) + c; /*error Gratuitous parentheses around expression.*/ typeof (a); /*error Gratuitous parentheses around expression.*/