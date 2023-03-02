describe('Favorite list scenarios', () => {
    let testData;
    beforeEach(function () {
      cy.fixture(`data_${Cypress.env('fileConfig')}.json`).then(function(regdata){
        testData = regdata;
        return testData;
    })
})
  it.only('Successfully adding products to the "Beğendiklerim" list from the product detail page', () => {
      let productName;
      cy.login(testData.email,testData.password)
      cy.get('#SearchBoxOld').type('bilgisayar')
      cy.get('[class=SearchBoxOld-buttonContainer]').click()
      cy.get('#i0>div>a').invoke('removeAttr','target').click()
      cy.get('#product-name').then(($product) => {
        productName = $product.text()
     })
      cy.get('.product-name').then(($product) => {
        const txt = $product.text()
        cy.log(txt)
        if(txt=='Beğendin'){
            cy.get('.addToMyFavoriteList>ul>li>div>div>div>div>div>div>div>div').eq(1).click()
            cy.wait(4000)
            cy.get('.addToMyFavoriteList>ul>li>div>div>div>div>div>div>div>div').eq(1).click()
            cy.get('.hb-toast-link').click()
        }
        else{
            cy.wait(4000)
            cy.get('.addToMyFavoriteList>ul>li>div>div>div>div>div>div>div>div').eq(1).click()
            cy.get('.hb-toast-link').click()
        } 
      })
      cy.get('[data-test-id="product-card-name"]').should('be.visible')
    })
  })