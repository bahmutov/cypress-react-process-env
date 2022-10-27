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
