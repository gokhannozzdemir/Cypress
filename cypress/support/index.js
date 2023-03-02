import { config, from } from 'rxjs';
import './commands'
import 'cypress-xpath'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

before(() => {
    cy.log('-- Test started --')

  })
after(() => {
    cy.log(Cypress.currentTest.title)
    cy.log('Global After Hook');
});