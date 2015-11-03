//#Patterns: no-delete-var
//#Warn: no-delete-var

/*eslint no-delete-var: 2*/ var x; delete x; /*error Variables should not be deleted.*/