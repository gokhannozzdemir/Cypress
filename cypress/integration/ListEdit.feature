Feature: List edit scenarios

  @caseid:C228480
  Scenario: C228480 List Name Edit
    Given I should login with "defaultUser"
    And   I visit mylist page
    Then  The visible of "Listelerim" is checked on the page
    And   I click on the list edit button
    Then  I check that the edit modal is opened
    And   I click on the "Listemi düzenle" button
    Then  Check that the list edit modal open
    And   List name is changed
    And   I click on the "Kaydet" button
    Then  The visible of "Listeniz güncellendi." is checked on the page