import basePage from "./BasePage";

export default class ProfilPage extends basePage {

    btnProfileEdit = "//div[@class='profileButtonHolder']"
    mdlProfileEditDrawer = "//form[@class='profileEditFormHolder false']"
    inputDisplayName = "//input[@name='displayName']"
    btnProfilePrivacyChange = "//label[@class='switch']"
    txtProfileName = "//div[@class='displayNameHolder']"
    txtInvalidProfileMessage = "(//div[@class='profileEditInputField']/div/div/div)[2]"
    mdlKvkkScreen = "//div[@class='customModalWrapper staticFileModalHolder false']"
    btnBackButton = "//div[@class='closeIconHolder']"
    mdlImageEditHolder = ".profileModalHolder"
    inputProfileImage = "#filePicker"

    clickProfileEditButton() {
        cy.xpath(this.btnProfileEdit).click()
    }

    isVisibleProfileEditDrawer(){
        cy.xpath(this.mdlProfileEditDrawer).should('be.visible')
    }

    enterProfileName(profileName) {
        cy.xpath(this.inputDisplayName).clear()
        cy.xpath(this.inputDisplayName).type(profileName)
    }

    clickProfilePrivacyChangeButton() {
        cy.xpath(this.btnProfilePrivacyChange).click()
    }

    checkedProfileName(profileName) {
        cy.checkText(this.txtProfileName, profileName)
    }

    checkInfoMessage(invalidProfilNameInfo){
        cy.checkText(this.txtInvalidProfileMessage,invalidProfilNameInfo)
    }

    clearDisplayName(){
        cy.xpath(this.inputDisplayName).clear()
    }

    isVisibleKvkkScreen(){
        cy.xpath(this.mdlKvkkScreen).should('be.visible')
    }

    clickBackButton(){
        cy.xpath(this.btnBackButton).click()
    }

    isOpenImageEditHolder(){
        cy.get(this.mdlImageEditHolder).should('be.visible')
    }

    uploadProfileImage(){
        cy.uploadFile(this.inputProfileImage)
    }
}