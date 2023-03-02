import loginPage from "../integration/pageobject/LoginPage";
import "cypress-file-upload";
import imagerequest from '../fixtures/image_request.json';

const login = new loginPage();

Cypress.Commands.add("uploadFile", (locator) => {
  cy.get(locator).attachFile("image/image1.jpeg");
});

Cypress.Commands.add("login", (username, password) => {
  cy.clearCookies()
  cy.setCookie('HB-Load','Hepisiburada-Load-Test')
  login.navigate()
  login.enterEmail(username)
  login.submitEmail()
  login.enterPassword(password)
  login.submitPassword()
  cy.get("[title=Hesabım]").should("be.visible")
  cy.url().should("eq", Cypress.config().baseUrl)
})

Cypress.Commands.add("uploadProfile", (user) => {
  cy.fixture("image_request.json").as("image_request");
  cy.fixture(`data_${Cypress.env("fileConfig")}.json`).then((userData) => {
    cy.request({
      method: "POST",
      url: Cypress.env("erised-command-base-v2") + "/profiles/image",
      headers: {
        "Content-Type": "application/json;",
        "user-id": userData[user].userId,
      },
      body: imagerequest,
    }).then((response) => {
      expect(response.status).to.eq(202)
    })
  })
})

Cypress.Commands.add("searchProduct", (productName) => {
  cy.get("#SearchBoxOld").type(productName);
  cy.get("[class=SearchBoxOld-buttonContainer]").click();
  cy.get("#i0>div>a").invoke("removeAttr", "target").click();
  cy.contains("İndirim alarmı").click();
  cy.get(".hb-toast-text").should("be.visible");
  cy.get(".hb-toast-link").click();
});

Cypress.Commands.add("RemoveItemFromAlarmList", (value, userId) => {
  cy.request({
    method: "DELETE",
    url: Cypress.env("erised-command-base") + "/mylists/alarms/items",
    headers: {
      "Content-Type": "application/json;",
      "user-id": userId,
    },
    body: [
      {
        id: value.items[0].productId,
        sku: value.items[0].sku,
        listingId: value.items[0].listingId,
      },
    ],
  }).then((response) => {
    expect(response.status).to.eq(202);
  });
});

Cypress.Commands.add("forceVisit", (url) => {
  cy.window().then((win) => {
    return win.open(url, "_self");
  });
});

Cypress.Commands.add("checkText", (locator, text) => {
  cy.xpath(locator).should(($listText) => {
    expect($listText.text().trim()).to.eq(text);
  });
});

Cypress.Commands.add("visible", (locator) => {
  cy.xpath(locator).should("be.visible");
});

Cypress.Commands.add("getAlarmList", (userId) => {
  cy.request({
    method: "GET",
    url:
      Cypress.env("erised-query-base") +
      "/mylists/alarms/items?Limit=24&SortId=0",
    headers: {
      "Content-Type": "application/json;",
      "user-id": userId,
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
    return response.body;
  });
});

Cypress.Commands.add("listDelete", (currentListIdURL) => {
  var env = `cypress/fixtures/data_${Cypress.env("fileConfig")}.json`;
  if (currentListIdURL != null) {
    cy.readFile(env).then((data) => {
      cy.request({
        method: "DELETE",
        url:
          Cypress.env("erised-command-base") + "/mylists/" + currentListIdURL,
        headers: {
          "user-id": data.userId,
        },
      }).then((response) => {
        cy.log(response.status);
        expect(response.status).to.eq(202);
      });
    });
  }
});
