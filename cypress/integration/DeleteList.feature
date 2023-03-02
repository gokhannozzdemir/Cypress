Feature: Delete list test scenarios

  @caseid:C218023
  Scenario: C218023 Successful deletion of the created list
    Given I should login with "defaultUser"
    And   I visit mylist page
    Then  The visible of "Listelerim" is checked on the page
    When  I click on the "Liste Oluştur" button
    And   I enter list name to create list
    And   I click on the "Oluştur ve ürün ekle" button
    Then  I check the "/ozel-listelerim" url
    And   I closed the add product drawer
    Then  Checked list name is correct in list detail
    Then  The visible of "Gizli liste" is checked on the page
    And   I click on Back button in list detail
    Then  Checked list name is correct in list page
    And   I click on the list edit button
    And   I check that the edit modal is opened
    And   I click on the "Listeyi sil" button
    And   I check that the list delete modal is opened
    Then  The visible of "Seçilen listeyi silmek istiyor musunuz?" is checked on the page
    And   I click on the "Onayla" button
    And   Check that the deleted list is not in the list

  @caseid:C218024
  Scenario: C218024 Canceling the list deletion
    Given I should login with "defaultUser"
    And   I visit mylist page
    Then  The visible of "Listelerim" is checked on the page
    When  I click on the "Liste Oluştur" button
    And   I enter list name to create list
    And   I click on the "Oluştur ve ürün ekle" button
    Then  I check the "/ozel-listelerim" url
    And   I closed the add product drawer
    Then  Checked list name is correct in list detail
    Then  The visible of "Gizli liste" is checked on the page
    And   I click on Back button in list detail
    Then  Checked list name is correct in list page
    And   I click on the list edit button
    And   I check that the edit modal is opened
    And   I click on the "Listeyi sil" button
    And   I check that the list delete modal is opened
    Then  The visible of "Seçilen listeyi silmek istiyor musunuz?" is checked on the page
    And   I click on the "Vazgeç" button
    Then  Check that the list is not deleted