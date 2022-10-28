it('mocks process.env', () => {
  // no mocking
  cy.visit('/')
  cy.contains('h1', 'How To React').wait(1000)
  // mocking
  cy.visit('/', {
    onBeforeLoad(win) {
      win.process = {
        env: {
          REACT_APP_TITLE: 'How To Test',
        },
      }
    },
  })
  cy.contains('h1', 'How To Test')
})

it.only('replaces strings in the JS bundle', () => {
  cy.intercept('GET', 'bundle.js', (req) => {
    // avoid the browser sending 304 cached response
    delete req.headers['if-none-match']
    req.continue((res) => {
      res.body = res.body.replaceAll('"How To React"', '"How To Test"')
    })
  }).as('bundle')
  cy.visit('/')
  // confirm the server sent the response
  cy.wait('@bundle').its('response.statusCode').should('equal', 200)
  cy.contains('h1', 'How To Test')
})
