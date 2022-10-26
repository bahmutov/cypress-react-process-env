/// <reference types="cypress" />
import React from 'react'
import App from './App'

it('loads', () => {
  window.process = {
    env: Cypress.env(),
  }
  cy.mount(<App />)
})
