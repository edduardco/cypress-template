/// <reference types="Cypress" />

import { inRange } from "cypress/types/lodash"

context('Test API from Fake JSON Server', () => {

    beforeEach('DELETE before creating a new value', () => {
            cy.request({
                method: 'DELETE',
                url: 'http://localhost:3000/posts/2',
                failOnStatusCode:false
            }).then((res) => {
                expect(res.body).to.be.empty
            })
    })

    it('Test GET functionality of JSON server', () => {
        cy.request('http://localhost:3000/posts/1').its('body').should('have.property','id');
    })

    it('Test POST function', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/posts',
            body: {
                "id": 2,
                "title": 'Execute Automation',
                "author": 'Eduardo'
            }
        }).then((res) => {
            expect(res.body).has.property('title','Execute Automation');
        })
    })
})