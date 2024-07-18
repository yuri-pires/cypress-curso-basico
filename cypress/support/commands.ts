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

Cypress.Commands.add('preencherFormularioDeSatisfacaoComCamposObrigatorios', ()  => {
  cy.get('#firstName').type('Yuri')
  cy.get('#lastName').type('Pires')
  cy.get('#email').type('yuripires@gmail.com')
  cy.get('#phone').type('999796003')
  cy.get('#open-text-area').type('Satisfeito')
  cy.contains('button', 'Enviar').click();
})