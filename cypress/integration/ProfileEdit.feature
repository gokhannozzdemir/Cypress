Feature: Profile edit scenarios

  @caseid:C218076
  Scenario: C218076 Display name and privacy changes
    Given I should login with "defaultUser"
    And   I visit mylist page
    Then  The visible of "Listelerim" is checked on the page
    And   I click the profile edit button
    Then  I check that the edit modal is opened
    And   I click on the "Profilimi düzenle" button
    Then  I check that the profile edit drawer opened
    And   I enter profile name
    And   I change the profile privacy
    And   I click on the "Kaydet" button
    Then  The visible of "Profiliniz kaydedildi." is checked on the page
    Then  I check that the profile name change in list page

  @caseid:C218077
  Scenario: C218077 View KVKK screen
    Given I should login with "defaultUser"
    And   I visit mylist page
    Then  The visible of "Listelerim" is checked on the page
    And   I click the profile edit button
    Then  I check that the edit modal is opened
    And   I click on the "Profilimi düzenle" button
    Then  I check that the profile edit drawer opened
    And   I click on the "Aydınlatma Beyanı" button
    Then  I check that the KVKK screen opened
    Then  KVKK screen is closed
    Then  I check that the profile edit drawer opened

  @caseid:C218078
  Scenario: C218078 Checking the 30 character limit warning message
    Given I should login with "defaultUser"
    And   I visit mylist page
    Then  The visible of "Listelerim" is checked on the page
    And   I click the profile edit button
    Then  I check that the edit modal is opened
    And   I click on the "Profilimi düzenle" button
    Then  I check that the profile edit drawer opened
    And   I enter a name of 31 characters in the profile name field
    And   I click on the "Kaydet" button
    Then  The visible of "Profil adı maksimum 30 karakter olabilir" is checked on the profile edit page

  @caseid:C246702
  Scenario: C246702 Checking warning message when profile name is empty
    Given I should login with "defaultUser"
    And   I visit mylist page
    Then  The visible of "Listelerim" is checked on the page
    And   I click the profile edit button
    Then  I check that the edit modal is opened
    And   I click on the "Profilimi düzenle" button
    Then  I check that the profile edit drawer opened
    And   Display name field is left empty
    And   I click on the "Kaydet" button
    Then  The visible of "Profil adı girin" is checked on the profile edit page

  @caseid:C218079
  Scenario: C218079 Successfully upload a profile picture
    Given I should login with "defaultUser"
    And   I visit mylist page
    Then  The visible of "Listelerim" is checked on the page
    And   I click the profile edit button
    Then  I check that the edit modal is opened
    And   I click on the "Profilimi düzenle" button
    Then  I check that the profile edit drawer opened
    And   I click on the "Profil fotoğrafını düzenle" button
    Then  I check that the profile image edit holder is opened
    And   I choose picture to upload profile picture
    And   I click on the "Uygula" button
    Then  Checked that the selected photo is uploaded in the drawer
    And   I click on the "Kaydet" button
    Then  The visible of "Profiliniz kaydedildi." is checked on the page
    Then  Checks that the image is loaded on list page
    Then  The page refreshes and checks that the new image is loaded

 @caseid:C218089
 Scenario: C218089 Successfully Profile Image Delete
    Given I should login with "profileNonImageUser"
    And   I visit mylist page
    Then  The visible of "Listelerim" is checked on the page
    And   Profile picture is upload to "profileNonImageUser" user
    And   I click the profile edit button
    Then  I check that the edit modal is opened
    And   I click on the "Profilimi düzenle" button
    Then  I check that the profile edit drawer opened
    And   I click on the "Profil fotoğrafını düzenle" button
    Then  I check that the profile image edit holder is opened
    And   I click on the "Mevcut fotoğrafı sil" button
    Then  The visible of "Profil fotoğrafınız silindi." is checked on the page
    Then  The page is refreshed and checked that the profile picture has been deleted
