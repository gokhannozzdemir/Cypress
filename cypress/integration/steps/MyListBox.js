import {And, Then} from "cypress-cucumber-preprocessor/steps";
import myListBoxPage from "../pageobject/MyListBoxPage";

const myListBox = new myListBoxPage()

Then('Check that the list alarm is on in list page', () => {
    myListBox.checkAlarmOn()
})

And('I click share button in list page', () => {
    myListBox.clickShareButtonInList()
})

And('I click on the list edit button', () => {
    myListBox.clickEditList()
})

Then('I check that the edit modal is opened', () => {
    myListBox.checkEditModalIsOpen()
})

And('I check that the list delete modal is opened', () => {
    myListBox.checkListDeleteModalIsOpen()
})
