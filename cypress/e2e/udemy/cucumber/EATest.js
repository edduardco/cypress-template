import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from "../../udemy/pages/ealoginpage"

Given("I visit EA site", () => {
    cy.visit("http://eaapp.somee.com/")
});

When("I click login link", () => {
    cy.contains("Login").click();
})

When("I login as user with {string} and {string}", (username, password) => {
    //Enter username and password
    cy.get('#UserName').type(username);
    cy.get('#Password').type(password,{log:false});
    cy.get('.btn').click();
});

When("I login as following", (dataTable) => {
    dataTable.hashes().forEach((row) => {
        // cy.get('#UserName').type(row.userName);
        // cy.get('#Password').type(row.Password);


        // Page Object Model version
        loginPage.performLogin(row.userName,row.Password);
    });

    // cy.get('.btn').click();
    loginPage.clickLoginButton();
});