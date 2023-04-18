// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { selectYearAndMonth } from './util'

Cypress.Commands.add('selectDate', (dateToSelect) => {
    let monthToSelect = dateToSelect.split('/')[0]
    let dayToSelect = dateToSelect.split('/')[1]
    let yearToSelect = dateToSelect.split('/')[2]
    const dateObj = new Date(yearToSelect, monthToSelect - 1)
    const monthName = dateObj.toLocaleString('default', { month: 'long' });
  
    cy.get('#datepicker')
      .click()
  
    cy.get('.datepicker-switch')
      .should('contain', new Date().getFullYear())
    
    selectYearAndMonth(yearToSelect, monthName)
  
    cy.contains('td.day', dayToSelect)
    .click()

    dateToSelect = dateToSelect.replace(/\//g, '-')
    cy.get('.form-control')
    .should('have.value', dateToSelect)
  })
  