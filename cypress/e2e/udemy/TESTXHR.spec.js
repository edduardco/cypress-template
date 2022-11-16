/// <reference types="Cypress" />

describe("Test LambdaTest Website XHR", () => {

    beforeEach("Navigate to LambdaTest", () => {

        cy.visit("https://accounts.lambdatest.com/login");

        cy.fixture("lmabdaUser").as("lambdauser");

        cy.get("@lambdauser").then((lambdauser) => {

            cy.get("[name='email']").debug().type(lambdauser.UserName);
            cy.get("[name='password']").debug().type(lambdauser.Password, {log:false});

        });

        cy.get("#login-button").click();

    })

    it("Perform Login and verify XHR", () => {

        //Start the server
        cy.interpret().route({
            method:'GET',
            url: '/api/user/organization/team'
        }).as('team');

        cy.interpret().route({
            method:'GET',
            url: '/api/user/organization/team'
        }).as('apicheck');

        cy.get("@team").then((xhr) => {
            expect(xhr.status).to.eq(200);
            expect(xhr.response.body.data[0]).to.have.property("name", "UserName");
            expect(xhr.response.body.data[0]).to.have.property("role", "Admin");
        })

        cy.get("@apicheck").then((xhr) => {
            expect(xhr.status).to.eq(200);
            expect(xhr.response.body.data).to.have.property("maxQueue", 150);
        })

        //Implicit assertion
        cy.get('@apicheck').its('response.body').should('have.property','maxQueue').and('eql',150);
        
    })

    it("Verify LambdaTest cookies", () => {

        cy.getCookie('user_id').should('have.property','value','123456')

    })

})