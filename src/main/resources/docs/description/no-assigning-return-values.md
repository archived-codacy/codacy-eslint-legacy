Many first time users look at Cypress code and think it runs synchronously.

We see new users commonly write code that looks like this:

```
// DONT DO THIS. IT DOES NOT WORK
// THE WAY YOU THINK IT DOES.

const button = cy.get('button')

const form = cy.get('form')

// nope, fails
button.click()
```

If you’re familiar with Cypress commands already, but find yourself using const, let, or var then you’re typically 
trying to do one of two things:

You’re trying to store and compare values such as text, classes, attributes.
You’re trying to share values between tests and hooks like before and beforeEach.
For working with either of these patterns, please read our Variables and Aliases guide.

[Source](https://docs.cypress.io/guides/references/best-practices.html#Assigning-Return-Values)
