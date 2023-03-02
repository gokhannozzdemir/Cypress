Feature: Create list test scenarios

  @caseid:C217994
  Scenario: C217994 Create public list succcesfully
    Given I should login with "defaultUser"
    And   I visit mylist page
    Then  The visible of "Listelerim" is checked on the page
    When  I click on the "Liste Oluştur" button
    And   I enter list name to create list
    And   I check that the alarm is on
    And   I click on the "Paylaşılan" button
    And   I click on the "Oluştur ve ürün ekle" button
    Then  I check the "/ozel-listelerim" url
    And   I closed the add product drawer
    Then  Checked list name is correct in list detail
    And   I click on share button in list detail
    Then  The visible of "Liste Paylaşım Ayarları" is checked on the page
    Then  Check that the shared list is selected
    Then  Shared list description is controlled by "Listeniz sosyal medya linkleriyle paylaşıldıktan sonra listenizin durumu “paylaşılan” olarak güncellenecektir."
    Then  Check that the link is created
    And   I click on the "Kopyala" button
    Then  The visible of "Kopyalandı!" is checked on the page
    And   I visit copied url
    Then  Checked list name is correct in list detail

  @caseid:C217995
  Scenario: C217995 Create private list succcesfully
    Given I should login with "defaultUser"
    And   I visit mylist page
    Then  The visible of "Listelerim" is checked on the page
    And   If there is a favorites popup, it will be turned off
    And   If there is a alarm popup, it will be turned off
    When  I click on the "Liste Oluştur" button
    Then  I check that the create new list tab
    And   I enter list name to create list
    Then  I check that the alarm is on
    And   Default is checked to be "special"
    And   I click on the "Oluştur ve ürün ekle" button
    Then  I check the "/ozel-listelerim" url
    And   I closed the add product drawer
    Then  Checked list name is correct in list detail
    Then  The visible of "Gizli liste" is checked on the page
    And   I click on share button in list detail
    Then  The visible of "Liste Paylaşım Ayarları" is checked on the page
    Then  Check that the private list is selected
    Then  Private list description is controlled by "Listenizi size özel hale getirerek paylaşımı sonlandırırsınız. Dilediğiniz zaman tekrar arkadaşlarınızla paylaşabilirsiniz"
    And   I click on Kaydet button in share modal page
    Then  The not visible of "Liste Paylaşım Ayarları" is checked on the page

  @caseid:C217999
  Scenario: C217999 Create public list control in list page
    Given I should login with "defaultUser"
    And   I visit mylist page
    Then  The visible of "Listelerim" is checked on the page
    And   If there is a favorites popup, it will be turned off
    And   If there is a alarm popup, it will be turned off
    When  I click on the "Liste Oluştur" button
    Then  I check that the create new list tab
    And   I enter list name to create list
    And   I check that the alarm is on
    And   I click on the "Paylaşılan" button
    And   I click on the "Oluştur ve ürün ekle" button
    Then  I check the "/ozel-listelerim" url
    And   I closed the add product drawer
    Then  Checked list name is correct in list detail
    And   I click on Back button in list detail
    Then  Checked list name is correct in list page
    And   I click share button in list page
    Then  The visible of "Listemi Paylaş" is checked on the page
    Then  Shared list description is controlled by "Listeniz sosyal medya linkleriyle paylaşıldıktan sonra listenizin durumu “paylaşılan” olarak güncellenecektir."
    Then  Check that the link is created
    And   I click on the "Kopyala" button
    Then  The visible of "Kopyalandı!" is checked on the page
    And   I close share settings
    Then  The not visible of "Listemi Paylaş" is checked on the page

  @caseid:C218000
  Scenario: C218000 Create private list control in list page
    Given I should login with "defaultUser"
    And   I visit mylist page
    Then  The visible of "Listelerim" is checked on the page
    And   If there is a favorites popup, it will be turned off
    And   If there is a alarm popup, it will be turned off
    When  I click on the "Liste Oluştur" button
    Then  I check that the create new list tab
    And   I enter list name to create list
    And   Default is checked to be "special"
    And   I click on the "Oluştur ve ürün ekle" button
    Then  I check the "/ozel-listelerim" url
    And   I closed the add product drawer
    Then  Checked list name is correct in list detail
    Then  The visible of "Gizli liste" is checked on the page
    And   I click on Back button in list detail
    Then  Checked list name is correct in list page
    Then  Check that the list alarm is on in list page
    And   I click share button in list page
    Then  Check that the private list is selected

  @caseid:C218011
  Scenario: C218011 Create public list update to private list
    Given I should login with "defaultUser"
    And   I visit mylist page
    Then  The visible of "Listelerim" is checked on the page
    And   If there is a favorites popup, it will be turned off
    And   If there is a alarm popup, it will be turned off
    When  I click on the "Liste Oluştur" button
    Then  I check that the create new list tab
    Then  I check that the alarm is on
    And   I enter list name to create list
    And   I click on the "Paylaşılan" button
    And   I click on the "Oluştur ve ürün ekle" button
    Then  I check the "/ozel-listelerim" url
    And   I closed the add product drawer
    Then  Checked list name is correct in list detail
    And   I click on share button in list detail
    Then  The visible of "Liste Paylaşım Ayarları" is checked on the page
    Then  Check that the shared list is selected
    Then  Shared list description is controlled by "Listeniz sosyal medya linkleriyle paylaşıldıktan sonra listenizin durumu “paylaşılan” olarak güncellenecektir."
    And   I click on the "Bana Özel" button
    Then  The visible of save button in share modal
    And   I click on Kaydet button in share modal page
    Then  The not visible of "Liste Paylaşım Ayarları" is checked on the page
    Then  The visible of "Gizli liste" is checked on the page
    And   I click on share button in list detail
    Then  The visible of "Liste Paylaşım Ayarları" is checked on the page
    Then  Check that the private list is selected
    Then  Private list description is controlled by "Listenizi size özel hale getirerek paylaşımı sonlandırırsınız. Dilediğiniz zaman tekrar arkadaşlarınızla paylaşabilirsiniz"

  @caseid:C218012
  Scenario: C218012 Create private list update to public list
    Given I should login with "defaultUser"
    And   I visit mylist page
    Then  The visible of "Listelerim" is checked on the page
    And   If there is a favorites popup, it will be turned off
    And   If there is a alarm popup, it will be turned off
    When  I click on the "Liste Oluştur" button
    Then  I check that the create new list tab
    And   I enter list name to create list
    Then  I check that the alarm is on
    And   Default is checked to be "special"
    And   I click on the "Oluştur ve ürün ekle" button
    Then  I check the "/ozel-listelerim" url
    And   I closed the add product drawer
    Then  Checked list name is correct in list detail
    Then  The visible of "Gizli liste" is checked on the page
    And   I click on share button in list detail
    Then  The visible of "Liste Paylaşım Ayarları" is checked on the page
    Then  Check that the private list is selected
    Then  Private list description is controlled by "Listenizi size özel hale getirerek paylaşımı sonlandırırsınız. Dilediğiniz zaman tekrar arkadaşlarınızla paylaşabilirsiniz"
    And   I click on the "Paylaşılan" button
    Then  Shared list description is controlled by "Listeniz sosyal medya linkleriyle paylaşıldıktan sonra listenizin durumu “paylaşılan” olarak güncellenecektir."
    And   I click on the "Kopyala" button
    Then  The visible of "Kopyalandı!" is checked on the page
    Then  Check that the link is created
    And   I close share settings
    Then  The not visible of "Listemi Paylaş" is checked on the page
    And   I click on share button in list detail
    Then  The visible of "Liste Paylaşım Ayarları" is checked on the page
    Then  Check that the shared list is selected
    Then  Shared list description is controlled by "Listeniz sosyal medya linkleriyle paylaşıldıktan sonra listenizin durumu “paylaşılan” olarak güncellenecektir."

  @caseid:C218025
  Scenario: C218025 Alarm off create list
    Given I should login with "defaultUser"
    And   I visit mylist page
    Then  The visible of "Listelerim" is checked on the page
    And   If there is a favorites popup, it will be turned off
    And   If there is a alarm popup, it will be turned off
    When  I click on the "Liste Oluştur" button
    Then  I check that the create new list tab
    And   I enter list name to create list
    Then  I check that the alarm is on
    And   Alarm setting is changed
    Then  I check that the alarm is off
    And   Default is checked to be "special"
    And   I click on the "Oluştur ve ürün ekle" button
    And   I closed the add product drawer
    Then  Checked list name is correct in list detail
    And   I click on Back button in list detail
    Then  Checked list name is correct in list page
    Then  The not visible of alarm icon in share modal

  @caseid:C228650
  Scenario: C228650 Invalid List Name Create
    Given I should login with "defaultUser"
    And   I visit mylist page
    Then  The visible of "Listelerim" is checked on the page
    And   If there is a favorites popup, it will be turned off
    And   If there is a alarm popup, it will be turned off
    When  I click on the "Liste Oluştur" button
    Then  I check that the create new list tab
    And   I click on the "Oluştur ve ürün ekle" button
    Then  The visible of "Liste adı girin" is checked on the create list