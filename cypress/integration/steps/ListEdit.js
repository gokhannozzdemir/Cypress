import {And, Then} from "cypress-cucumber-preprocessor/steps"
import ListEditPage from "../pageobject/ListEditPage"
import ListPage from "../pageobject/ListPage"
import faker from "faker"

const listEdit = new ListEditPage()
const list = new ListPage()
var listName

Then('Check that the list edit modal open', () => {
    listEdit.checkListEditModalIsOpen()
})

And('List name is changed', () => {
    listName = faker.name.firstName()
    list.enterListName(listName)
})


