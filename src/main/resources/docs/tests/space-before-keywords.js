//#Patterns: space-before-keywords
//#Warn: space-before-keywords

/*eslint space-before-keywords: [2, "never"]*/ if (foo) { // ... } else {} /*error Unexpected space before keyword "else".*/ do { } while (foo) /*error Unexpected space before keyword "while".*/ try {} finally {} /*error Unexpected space before keyword "finally".*/ try {} catch(e) {} /*error Unexpected space before keyword "catch".*/