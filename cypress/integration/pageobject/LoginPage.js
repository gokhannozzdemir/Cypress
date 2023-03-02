export default class loginPage {

    txtName = "#txtUserName"
    txtPassword = "#txtPassword"
    btnLogin = "#btnLogin"
    btnEmailSelect = "#btnEmailSelect"

    navigate() {
        cy.visit(Cypress.env('homePage'))
    }

    enterEmail(username) {
        cy.get(this.txtName).clear()
        cy.get(this.txtName).type(username)
    }

    enterPassword(password) {
        cy.get(this.txtPassword).clear()
        cy.get(this.txtPassword).type(password)
    }

    submitEmail() {
        cy.get(this.btnLogin).click()
    }

    submitPassword() {
        cy.get(this.btnEmailSelect).click()
    }
}
