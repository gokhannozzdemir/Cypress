import ProfilPage from "../pageobject/ProfilPage";
import faker from 'faker'
import {And , Then} from "cypress-cucumber-preprocessor/steps";

var profileName,invalidProfilName
var profileImageSrc,profileNewImageSrc
const profile = new ProfilPage()


And('I click the profile edit button', () => {
    profile.clickProfileEditButton()
})

Then('I check that the profile edit drawer opened', () => {
    profile.isVisibleProfileEditDrawer()
})

And('I click the profile edit button', () => {
    profile.clickProfileEditButton()
})

And('I enter profile name', () => {
    profileName = faker.name.firstName() + ' ' + faker.name.lastName()
    cy.log(profileName);
    profile.enterProfileName(profileName)
})

And('I change the profile privacy', () => {
    profile.clickProfilePrivacyChangeButton()
})

Then('I check that the profile name change in list page', () => {
    profile.checkedProfileName(profileName)
    cy.reload()
    profile.checkedProfileName(profileName)
})

Then('I check that the KVKK screen opened', () => {
    profile.isVisibleKvkkScreen()
})

And('KVKK screen is closed', () => {
    profile.clickBackButton()
})
And('I enter a name of 31 characters in the profile name field', () => {
    invalidProfilName=faker.random.alpha(31)
    cy.log(invalidProfilName)
    profile.enterProfileName(invalidProfilName)
})

Then('The visible of {string} is checked on the profile edit page', (text) => {
   profile.checkInfoMessage(text)
})

Then('Display name field is left empty', (text) => {
    profile.clearDisplayName()
})

Then('I check that the profile image edit holder is opened', () => {
    profile.isOpenImageEditHolder()
    cy.get('.editProfile>.profileInfoAvatar').invoke('attr', 'src').then(src => {
        profileImageSrc=src
    })
})

And('I choose picture to upload profile picture', () => {
    profile.uploadProfileImage()
})

Then('Checked that the selected photo is uploaded in the drawer', () => {
    cy.wait(2000)
    cy.get('.editProfile>.profileInfoAvatar ').invoke('attr', 'src').then(src => {
        profileNewImageSrc=src
        assert.notEqual(profileImageSrc, src, 'vals not equal')
        expect(src).to.include('data:image')
    })
})

Then('Checks that the image is loaded on list page', () => {
    assert.notEqual(profileImageSrc, profileNewImageSrc, 'vals not equal')
})

Then('The page refreshes and checks that the new image is loaded', () => {
    cy.wait(5000)
    cy.reload()
    cy.get('.profileInfo>.profileInfoAvatar').invoke('attr', 'src').then(src => {
        cy.log("avalaible image :"+profileImageSrc)
        cy.log("uploaded image :"+src)
        assert.notEqual(profileImageSrc, src, 'vals not equal')
    })
})