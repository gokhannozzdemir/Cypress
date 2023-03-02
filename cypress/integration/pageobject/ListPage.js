import basePage from "./BasePage";

export default class listPage extends basePage {
    inputlistName = "#listName"
    btnClosePopUp = "[aria-label='Close'] > svg"
    btnCloseMyFavoritesPopUp = "[data-action='close'] > svg"
    btnCloseMyAlarmPopUp = "[data-action='close']"
    alarmOn = "//input[@id='isAlarmEnabled' and @value='true']"
    alarmOff = "//input[@id='isAlarmEnabled' and @value='false']"
    createNewList = "(//div[@data-test-id='dropdown-content'])[2]"
    txtListName = "(//div[@class='listTitle'])[2]"
    btnAlarmEnabled = "//label[@class='switch']"
    txtCreateList = "(//*[@class='createListInputField']/div/div/div)[2]"
    btnListEdit = "(//*[contains(@fill, '#fff') and @fill-rule= 'evenodd'])[2]"

    enterListName(listName) {
        cy.get(this.inputlistName).type(listName)
    }

    closeOnboardingPopUp() {
        cy.get("body").then($popup => {
            if ($popup.find(this.btnClosePopUp).length > 0) {
                cy.get(this.btnClosePopUp).click()
            }
        });
    }

    closeOnboardingMyFavoritesPopUp() {
        cy.get("body").then($popup => {
            if ($popup.find(this.btnCloseMyFavoritesPopUp).length > 0) {
                cy.get(this.btnCloseMyFavoritesPopUp).click()
            }
        });
    }

    closeOnboardingAlarmPopUp() {
        cy.get("body").then($popup => {
            if ($popup.find(this.btnCloseMyAlarmPopUp).length > 0) {
                cy.get(this.btnCloseMyAlarmPopUp).click()
            }
        });
    }

    isAlarmEnabledTrue() {
        cy.xpath(this.alarmOn).visible
    }

    isAlarmEnabledFalse() {
        cy.xpath(this.alarmOff).visible
    }

    inputElementIsVisible(privacy) {
        cy.get('input[id="' + privacy + '"]:checked').should('be.visible')
    }

    createNewListIsVisible() {
        cy.xpath(this.createNewList).should('be.visible')
    }

    checkedListName(listName) {
        cy.checkText(this.txtListName, listName)
    }

    clickAlarmEnabled() {
        cy.xpath(this.btnAlarmEnabled).click()
    }

    checkTextInfo(text) {
        cy.checkText(this.txtCreateList, text)
    }

    clickListEditButton() {
        cy.xpath(this.btnListEdit).click()
    }
}
