import basePage from "./BasePage";
var currentListIdURL

export default class listDetailPage extends basePage {

    txtListName = "//div[@class='listName']"
    geriButonu = "//div[@class='back-icon']"
    btnCloseAddProduct = "//div[@data-test-id='drawer-close']"

    checkUrl(url) {
        cy.url().should('include', url)
        cy.url().then(url => {
            currentListIdURL = url.split('/')[4]
        })
    }

    clickBackButton(){
        cy.xpath(this.geriButonu).click()
    }

    checkedListName(listName) {
        cy.checkText(this.txtListName, listName)
    }

    closeAddProductDrawer(){
        cy.xpath(this.btnCloseAddProduct).click()
    }

    uploadProfileImage(user){
        cy.uploadProfile(user)
        cy.wait(5000)
        cy.reload()
    }

    checkIsImageDelete(){
        cy.wait(3000)
        cy.reload()
        cy.get('.profileInfoAvatar').should('not.exist')
    }
}