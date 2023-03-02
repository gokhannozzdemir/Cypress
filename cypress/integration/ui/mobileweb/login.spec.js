///<reference types="cypress" />

describe('Successful login with username and password on mobile website', function() {
    let testData;
    before(function () {
      cy.fixture(`data_${Cypress.env('fileConfig')}.json`).then(function(regdata){
        testData = regdata;
        return testData;
    })
    })
    it('login steps', () => {
        //cy.viewport(550, 750)
        //cy.viewport('iphone-6') 
        cy.login(testData.email,testData.password)
    })  
})