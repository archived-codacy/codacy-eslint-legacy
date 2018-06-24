# Codacy ESLint

[![Codacy Badge](https://api.codacy.com/project/badge/grade/c477c894abe34e608640d6ed95c807f0)](https://www.codacy.com/app/Codacy/codacy-eslint)
[![Build Status](https://circleci.com/gh/codacy/codacy-eslint.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/codacy/codacy-eslint)
[![Docker Version](https://images.microbadger.com/badges/version/codacy/codacy-eslint.svg)](https://microbadger.com/images/codacy/codacy-eslint "Get your own version badge on microbadger.com")

This is the docker engine we use at Codacy for [ESLint](http://eslint.org/) support.
You can also create a docker to integrate the tool and language of your choice!
Check the **Docs** section for more information.

## Usage

Create a docker using the jar artifact:

```
./scripts/publish.sh codacy-eslint <VERSION>
```

Create a docker using the native binary artifact:

```
./scripts/publish-native.sh codacy-eslint <VERSION>
```

Run with the following command:

```
docker run -it -v $srcDir:/src  <DOCKER_NAME>:<DOCKER_VERSION>
```

## Docs

[Tool Developer Guide](https://support.codacy.com/hc/en-us/articles/207994725-Tool-Developer-Guide)

[Tool Developer Guide - Using Scala](https://support.codacy.com/hc/en-us/articles/207280379-Tool-Developer-Guide-Using-Scala)

## Test

We use the [codacy-plugins-test](https://github.com/codacy/codacy-plugins-test) to test our external tools integration.
You can follow the instructions there to make sure your tool is working as expected.

## Adding plugins

To add a plugin to codacy-eslint you just have to:

* Add the `npm install` command for the plugin in the project's [build.sbt](https://github.com/codacy/codacy-eslint/blob/master/build.sbt#L29)
* If you want to be able to configure patterns in Codacy (without needing an ESLint configuration file) you also have to add the new patterns to [patterns.json](https://github.com/codacy/codacy-eslint/blob/master/src/main/resources/docs/patterns.json)

## What is Codacy?

[Codacy](https://www.codacy.com/) is an Automated Code Review Tool that monitors your technical debt, helps you improve your code quality, teaches best practices to your developers, and helps you save time in Code Reviews.

### Among Codacy’s features:

* Identify new Static Analysis issues
* Commit and Pull Request Analysis with GitHub, BitBucket/Stash, GitLab (and also direct git repositories)
* Auto-comments on Commits and Pull Requests
* Integrations with Slack, HipChat, Jira, YouTrack
* Track issues Code Style, Security, Error Proneness, Performance, Unused Code and other categories

Codacy also helps keep track of Code Coverage, Code Duplication, and Code Complexity.

Codacy supports PHP, Python, Ruby, Java, JavaScript, and Scala, among others.

### Free for Open Source

Codacy is free for Open Source projects.
