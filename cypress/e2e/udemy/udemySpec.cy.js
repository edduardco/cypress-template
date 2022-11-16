/// <reference types="Cypress" />

describe('Testing of EA App', () => {

  it('Login application', () => {

    //Visiting website
    cy.visit("http://eaapp.somee.com/");

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

    cy.contains("Login").click();

    //URI validation
    cy.url().should("include", "/Account/Login");

    cy.get('#UserName').type("admin");
    cy.get('#Password').type("password");
    cy.get('.btn').click();

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

  //Hooks: before, beforeEach, after, afterEach
  before("Call for a particulat it block", () => {
    cy.visit("https://executeautomation.com/");
  })

  it.only("Testing EA Site for assertion", () => {

    //Implicit assertion
    cy.get("[aria-haspopup='listbox']",{timeout:60000}).should('have.class','Dropdown-control');

    //Explicit assertion
    cy.get("[aria-haspopup='listbox']",{timeout:60000}).should(($element) => {
      expect($element).to.have.class("Dropdown-control");
    })
  })

})