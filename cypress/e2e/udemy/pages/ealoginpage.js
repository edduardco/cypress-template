/// <reference types = 'Cypress' />

export class EALoginPage {

    performLogin(userName, password){
        cy.get('#UserName').type(userName);
        cy.get('#Password').type(password);
    }

    clickLoginButton(){
        cy.get('.btn').click();
    }

}

export const loginPage = new EALoginPage();