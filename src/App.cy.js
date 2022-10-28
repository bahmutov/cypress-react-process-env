/// <reference types="cypress" />
import React from 'react'
import App from './App'

it('loads', () => {
  window.process = {
    env: {
      REACT_APP_TITLE: 'How To Component Test',
    },
  }
  cy.mount(<App />)
  cy.contains('h1', window.process.env.REACT_APP_TITLE)
})
