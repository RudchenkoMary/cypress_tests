/// <reference types="cypress" />

describe('Sample', () => {
  it('visits the Cypress example page', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink')
  })
})
