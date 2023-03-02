import basePage from "./BasePage";

export default class shareModalPage extends basePage {

    btnShareButton = "//div[contains(@class,'buttonHolder')]"
    btnSharedList = "//div[@class='publicShareHolder']"
    btnPrivateList = "//div[@class='privateHolder']"
    txtShareListTextId = ".publicShareText"
    txtPrivateListTextId = ".privateText"
    shareLink = "//input[contains(@value, 'https://app.hps.im')]"
    btnSave = "//button[contains(text(),'Kaydet')]"
    btnCloseShareSettings = "//div[@class='sc-AxirZ hnalpt']"
    iconAlarmInListPage = "(//*[@class='myListBoxActionHolder '])[1]//div[@class='alarmIconHolder']"

    clickShareButton() {
        cy.xpath(this.btnShareButton).click()
    }

    isSelectedShareList() {
        cy.visible(this.btnSharedList)
    }

    isSelectedPrivateList() {
        cy.visible(this.btnPrivateList)
    }

    equalityOfSharedListText(text) {
        cy.get(this.txtShareListTextId).should(($listText) => {
            expect($listText.text()).to.eq(text)
        })
    }

    equalityOfPrivateListText(text) {
        cy.get(this.txtPrivateListTextId).should(($listText) => {
            expect($listText.text()).to.eq(text)
        })
    }

    checkCreatedLink() {
        cy.visible(this.shareLink)
    }

    clickSaveButton() {
        cy.xpath(this.btnSave).click()
    }

    visitCopiedUrl() {
        cy.get('.share-link-input').invoke('attr', 'value').then(list => {
            cy.forceVisit(list)
        })
    }

    visibleSaveButton() {
        cy.xpath(this.btnSave).should('be.visible')
    }

    closeShareSettings() {
        cy.xpath(this.btnCloseShareSettings).click()
    }

    isNotVisibleAlarmInListPage() {
        cy.xpath(this.iconAlarmInListPage).should('not.exist')
    }
}
