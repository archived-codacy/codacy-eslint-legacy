Unit test inject functions should only consist of assignments from injected values to describe block variables

Inject functions in unittests should only contain a sorted mapping of injected values to values in the describe block
 with matching names. This way the dependency injection setup is separated from the other setup logic, improving readability of the test.

```
//Bad:
describe(function() {
    var $httpBackend;
    var $rootScope;

    beforeEach(inject(function(_$httpBackend_, _$rootScope_) {
        $httpBackend = _$httpBackend_;
        $rootScope = _$rootScope_;

        $httpBackend.whenGET('/data').respond([]);
    }));
}); // error: inject functions may only consist of assignments in the form myService = _myService_

//Good:
describe(function() {
    var $httpBackend;
    var $rootScope;

    beforeEach(inject(function(_$httpBackend_, _$rootScope_) {
        $httpBackend = _$httpBackend_;
        $rootScope = _$rootScope_;
    }));

    beforeEach(function() {
        $httpBackend.whenGET('/data').respond([]);
    });
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/dumb-inject.md)
