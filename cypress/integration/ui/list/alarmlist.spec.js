describe('Alarm list scenarios', () => {
    let testData;
    beforeEach(function () {
      cy.fixture(`data_${Cypress.env('fileConfig')}.json`).then(function(regdata){
        testData = regdata;
        return testData;
    })
})
  it.only('C154077 Successfully adding products to the "Alarm Listem" list from the product detail page', () => {
      cy.getAlarmList(testData.userId).then((value) => {
        if(value.items.length>0){
        cy.RemoveItemFromAlarmList(value,testData.userId);
        }
      });
      cy.login(testData.email,testData.password)
      cy.get('#SearchBoxOld').type('bilgisayar')
      cy.get('[class=SearchBoxOld-buttonContainer]').click()
      cy.get('#i0>div>a').invoke('removeAttr','target').click()
      cy.contains('İndirim alarmı').click()
      cy.get('.hb-toast-text').should('be.visible')
      cy.get('.hb-toast-link').should('be.visible').click()
      cy.get('[data-test-id="product-card-name"]').should('be.visible')
      cy.get('.desktop-product-box-holder').should('be.visible')
    })
  })