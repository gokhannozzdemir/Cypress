import {And, Then} from "cypress-cucumber-preprocessor/steps";
import shareModalPage from "../pageobject/ShareModalPage";

const shareModal = new shareModalPage()

Then('Check that the shared list is selected', () => {
    shareModal.isSelectedShareList()
})

Then('Check that the private list is selected', () => {
    shareModal.isSelectedPrivateList()
})

Then('Shared list description is controlled by {string}', (text) => {
    shareModal.equalityOfSharedListText(text)
})

Then('Private list description is controlled by {string}', (text) => {
    shareModal.equalityOfPrivateListText(text)
})

Then('Check that the link is created', () => {
    shareModal.checkCreatedLink()
})

And('I visit copied url', () => {
    shareModal.visitCopiedUrl()
})

And('I click on share button in list detail', () => {
    shareModal.clickShareButton()
})

And('I click on Kaydet button in share modal page', () => {
    shareModal.clickSaveButton()
})


And('I close share settings', () => {
    shareModal.closeShareSettings()
})

Then('The visible of save button in share modal', () => {
    shareModal.visibleSaveButton()
})

Then('The not visible of alarm icon in share modal', () => {
    shareModal.isNotVisibleAlarmInListPage()
})

