import {Then} from 'cypress-cucumber-preprocessor/steps'
import listDetailPage from "../pageobject/ListDetailPage"

const listDetail = new listDetailPage()

Then('I click on Back button in list detail', () => {
    listDetail.clickBackButton()
})

Then('I closed the add product drawer', () => {
    listDetail.closeAddProductDrawer()
})

Then('Profile picture is upload to {string} user', (user) => {
    listDetail.uploadProfileImage(user)
})

Then('The page is refreshed and checked that the profile picture has been deleted', () => {
    listDetail.checkIsImageDelete()
})

