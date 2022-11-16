/// <reference types="Cypress" />

describe('Testing of EA App', () => {

    before("Login to application", () => {
        //Visiting website
        cy.visit("http://eaapp.somee.com/");

        cy.fixture("eauser").as("user");

        cy.get("@user").then((user) => {
            cy.login(user.UserName, user.Password);
        })

    })

    it('Performing Benefit check', () => {      

        //cy.contains("Login").click();

        //URI validation
        cy.url().should("include", "/Account/Login");

        // cy.get("@user").then((user) => {
        //     cy.get('#UserName').type(user.UserName);
        //     cy.get('#Password').type(user.Password);
        // })
        
        
        // cy.get('.btn').click({ force:true});

        

        //Click Employee List
        cy.contains("Employee List").click();

        //First identfy the table > all rows > row with Johnsmith > parent of that row
        //Table
        // cy.get('.table').find('tr').contains("Johnsmit").parent().contains("Benefits").click();

        // cy.get('.table').find('tr').as("rows");
        // //Wrap brings all elemets, along the property multiple it works as a foreach
        // cy.get("@rows").then(($row) => {
        //   cy.wrap($row).click({multiple:true});
        // })

        //Verify the value from a property
        cy.wrap({name:'Karthik'}).should('have.property','name').and('eq','Karthik');

        //Using wrap
        cy.get('.table').find('tr > td').then(($td) => {
        cy.wrap($td).contains("John").invoke('wrap').parent().contains("Benefits").click();
        })

    })

})