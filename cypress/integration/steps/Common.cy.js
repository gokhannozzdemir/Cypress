import {And, Given, Then} from "cypress-cucumber-preprocessor/steps";
import listPage from "../pageobject/ListPage";
import listDetailPage from "../pageobject/ListDetailPage";
import commonPage from "../pageobject/CommonPage";

var currentListIdURL
const list = new listPage()
const listDetail = new listDetailPage()
const common = new commonPage()


Given('I visit mylist page', () => {
    list.navigateToUrl('listPage')
    list.closeOnboardingPopUp()
})

And('I check the {string} url', (url) => {
    listDetail.checkUrl(url)
})

Then('I click on the {string} button', (button) => {
    list.closeOnboardingAlarmPopUp()
    common.clickButton(button)
})

Then('The not visible of {string} is checked on the page', (modalName) => {
    common.isNotVisibleElement(modalName)
})

Then('The visible of {string} is checked on the page', (text) => {
    common.isVisibleElement(text)
})


after(() => {
    cy.log(currentListIdURL)
    cy.listDelete(currentListIdURL)
})