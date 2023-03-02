let testData

before(function () {
    cy.fixture(`data_${Cypress.env('fileConfig')}.json`).then(function (regdata) {
        testData = regdata;
        return testData;
    })
})

export default class basePage{

    login(user) {
        cy.login(testData[user].email, testData[user].password)
    }

    navigateToUrl(url) {
        cy.visit(Cypress.env(url))
    }

    isVisibleElement(text) {
        const isVisibleElement = "//*[contains(text(),'" + text + "')]"
        cy.visible(isVisibleElement)
    }

    isNotVisibleElement(modalName) {
        const isNotVisibleElement = "//*[contains(text(),'" + modalName + "')]"
        cy.xpath(isNotVisibleElement).should('not.exist')
    }

    clickButton(button) {
        const buttonName = "//*[contains(text(),'" + button + "')]"
        cy.xpath(buttonName).click()
    }
}

