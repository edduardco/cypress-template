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


Cypress.Commands.add('login', (username, password) => {

    //Long way of working with promise and alis
    // cy.get("#loginLink").then(($link) => {
    //   return $link.text(); 
    // }).as("linkText");

    //Short way of working with promise using invoke adn alias
    cy.get("#loginLink").invoke('text').as("linkText");

    //Text validation using Alias
    cy.get("@linkText").then(($link) => {
        expect($link).is.eql('Login');
    })
    
    //Perform login click
    cy.contains("Login").click();

    //URI validation
    cy.url().should("include", "/Account/Login");

    //Enter username and password
    cy.get('#UserName').type(username);
    cy.get('#Password').type(password);
    cy.get('.btn').click({ force: true });
})