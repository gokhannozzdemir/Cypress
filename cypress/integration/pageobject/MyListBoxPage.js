import basePage from "./BasePage";

export default class myListBoxPage extends basePage {

    alarmIcon = "(//*[@class='alarmIcon'])[2]"
    mdlEdit = "//div[@class='actionContentHolder']"
    mdlListDelete = "//div[@class='listDeleteModalContentHolder']"
    btnShareInMyList = "(//div[@class='share'])[2]"
    btnEditList = "(//div[@class='edit'])[2]"

    checkAlarmOn(){
        cy.visible(this.alarmIcon);
    }
   
    checkEditModalIsOpen(){
        cy.visible(this.mdlEdit)
    }

    checkListDeleteModalIsOpen(){
        cy.visible(this.mdlListDelete)
    }

    clickShareButtonInList() {
        cy.xpath(this.btnShareInMyList).click()
    }

    clickEditList(){
        cy.xpath(this.btnEditList).click()
    }
}