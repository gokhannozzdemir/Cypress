import {And, Then} from 'cypress-cucumber-preprocessor/steps'
import faker from 'faker'
import listPage from "../pageobject/ListPage"
import listDetailPage from "../pageobject/ListDetailPage"

var listName
const list = new listPage()
const listDetail = new listDetailPage()

And('I enter list name to create list', () => {
    listName = faker.name.firstName()
    list.enterListName(listName)
})

Then('Checked list name is correct in list detail', () => {
    listDetail.checkedListName(listName)
})

And('I check that the alarm is on', () => {
    list.isAlarmEnabledTrue()
})

And('I check that the alarm is off', () => {
    list.isAlarmEnabledFalse()
})

And('Default is checked to be {string}', (privacy) => {
    list.inputElementIsVisible(privacy)
})

And('I check that the create new list tab', () => {
    list.createNewListIsVisible()
})

And('If there is a favorites popup, it will be turned off', () => {
    list.closeOnboardingMyFavoritesPopUp()
})

And('If there is a alarm popup, it will be turned off', () => {
    list.closeOnboardingAlarmPopUp()
})

Then('Checked list name is correct in list page', () => {
    list.checkedListName(listName)
})

And('Check that the deleted list is not in the list', () => {
    cy.reload()
    list.isNotVisibleElement(listName)
 })

Then('Alarm setting is changed', () => {
    list.clickAlarmEnabled()
});

Then('Check that the list is not deleted', () => {
    list.isVisibleElement(listName)
})

Then('The visible of {string} is checked on the create list', (text) => {
    list.checkTextInfo(text)
})


   

