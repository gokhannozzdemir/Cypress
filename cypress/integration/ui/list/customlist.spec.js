const { eq } = require("lodash");

describe('Alarm list scenarios', () => {
    let testData;
    beforeEach(function () {
      cy.fixture(`data_${Cypress.env('fileConfig')}.json`).then(function(regdata){
        testData = regdata;
        return testData;
    })
})
  it.only('Successfully create new customlist and delete customlist', () => {
      cy.login(testData.email,testData.password)
      cy.visit(Cypress.env('listPage'));
      cy.get('.desktop-create-list-action > .createListDropdownHolder > div').click()
      cy.get('.desktop-create-list-action > .createListDropdownHolder >div>div>form>div>div>div>input').type('CustomList')
      cy.get('.desktop-create-list-action > .createListDropdownHolder > div>div>form>button').click()
      cy.url().should('include', 'ozel-listelerim')
      cy.get('.my-list-properties > .list-properties > .tools > div > svg').click()
      cy.contains('Listeyi sil').click()
      cy.get('#ActionWindow-Holder').should('be.visible')
      cy.get('#DeleteListModal-ActionButton').click()
      cy.get('.notification-title').should('to.have.text','Listeniz başarıyla silindi')
      cy.url().should('eq',Cypress.env('listPage'))
    })
  })