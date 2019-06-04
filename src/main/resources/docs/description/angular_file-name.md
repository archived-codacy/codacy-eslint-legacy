Require and specify a consistent component name pattern

All your file names should match the angular component name. The second parameter can be a config object [2, {nameStyle: 'dash', typeSeparator: 'dot', ignoreTypeSuffix: true, ignorePrefix: 'ui'}] to match 'avenger-profile.directive.js' or 'avanger-api.service.js'. Possible values for 'typeSeparator' and 'nameStyle' are 'dot', 'dash' and 'underscore'. The options 'ignoreTypeSuffix' ignores camel cased suffixes like 'someController' or 'myService' and 'ignorePrefix' ignores namespace prefixes like 'ui'. It's possible to specify a regexp for ignorePrefix. Example RegExp: "/^ui./".

The naming scheme is <componentName><typeSeparator><componentType>.js

The componentType for all service types (service, factory, provider, value) is 'service'. Since 1.5.0 it is possible to configure custom mappings for the componentType: {typeSeparator: 'dot', componentTypeMappings: {factory: 'factory', provider: 'provider'}.

```
//Bad:
app.filter('usefulFilter', function() {}); // error: Filename must be "usefulFilter.js"

//Good:
//valid with filename: myModule.js
angular.module('myModule', []);
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/file-name.md)
