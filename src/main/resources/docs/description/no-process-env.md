The process.env object in Node.js is used to store deployment/configuration parameters. Littering it through out a project could lead to maintenance issues as it's another kind of global dependency. As such, it could lead to merge conflicts in a multi-user setup and deployment issues in a multi-server setup. Instead, one of the best practices is to define all those parameters in a single configuration/settings file which could be accessed throughout the project. This rule is aimed at discouraging use of process.env to avoid global dependencies. As such, it will warn whenever process.env is used.


```

//Bad:
if(process.env.NODE_ENV === "development") {
 
}

//Good:
if(config.env === "development") {
    //...
}

```

[Source](http://eslint.org/docs/rules/no-process-env)
