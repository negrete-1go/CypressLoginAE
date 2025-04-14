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
Cypress.Commands.add('maximize', () => {
    cy.viewport(1920, 1080);
});

Cypress.Commands.add('LoginAPI', () => {
  cy.get('@userLogin').then((userLogin) => { 
  cy.request("POST","https://rahulshettyacademy.com/api/ecom/auth/login", {
              "userEmail": userLogin.user, 
              "userPassword": userLogin.password 
            }).then(function(response){
              expect(response.status).to.eq(200)
              Cypress.env('token', response.body.token);
            })
          })
});

