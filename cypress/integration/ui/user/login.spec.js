///<reference types="cypress" />

describe('Successful login with username and password', function() {
    let testData;
    before(function () {
      cy.fixture(`data_${Cypress.env('fileConfig')}.json`).then(function(regdata){
        testData = regdata;
        return testData;
    })
    })
    it('I should login', () => {
        cy.login(testData.email,testData.password)
    })  
})