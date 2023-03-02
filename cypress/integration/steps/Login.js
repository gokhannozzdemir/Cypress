import {And} from "cypress-cucumber-preprocessor/steps";
import listPage from "../pageobject/ListPage";

const list = new listPage()

And('I should login with {string}', (user) => {
    list.login(user)
})