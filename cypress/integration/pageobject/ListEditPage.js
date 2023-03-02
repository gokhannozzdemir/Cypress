import basePage from "./BasePage";

export default class myListBoxPage extends basePage {

    mdlListEdit = "//div[@class='editListHolder']";

    checkListEditModalIsOpen(){
        cy.xpath(this.mdlListEdit).should('not.be.hidden')
    }
}