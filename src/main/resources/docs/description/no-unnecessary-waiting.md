In Cypress, you almost never need to use cy.wait() for an arbitrary amount of time. If you are finding yourself doing this, there is likely a much better, simpler way.

```
//Bad:
cy.request('http://localhost:8080/db/seed')
cy.wait(5000)

//Good:
cy.server()
cy.route('GET', /users/, [{ 'name': 'Maggy' }, { 'name': 'Joan' }]).as('getUsers')
cy.get('#fetch').click()
cy.wait('@getUsers')     // <--- wait explicitly for this route to finish
cy.get('table tr').should('have.length', 2) 
```

[Source](https://docs.cypress.io/guides/references/best-practices.html#Unnecessary-Waiting)
