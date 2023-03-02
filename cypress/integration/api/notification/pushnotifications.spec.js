describe('/api/PushNotifications endpoint api test', () => {
    let testData;
    beforeEach(function () {
      cy.fixture(`data_${Cypress.env('fileConfig')}.json`).then(function(regdata){
        testData = regdata;
        return testData;
    })
  })
    it.only('Receive valid HTTP response code 200 for /api/PushNotifications get request', () => {
         cy.request({
             method: 'GET',
             url: Cypress.env('notification-api')+'/api/PushNotifications',
             qs:{
                'PushIntention' : 1
             },
             headers:{
                'user-id': testData.userId
             }
         }).then((response) => { 
             expect(response.status).to.eq(200)
             expect(response.body.success).to.eq(true)
             assert.isNotNull(response.body.data)
         }) 
     })
     it.only('Receive valid HTTP response code 200 for /api/PushNotifications post request', () => {
        cy.request({
            method: 'POST',
            url: Cypress.env('notification-api')+'/api/PushNotifications',
            body: {
                "transactionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "messageTemplateId": "",
                "title": "Hepsiburada",
                "subTitle": "Hepsiburada",
                "message": "Hepsiburada",
                "pushType": "PN_SendOrder",
                "pushIntention": 1,
                "owner": "HB"
            },
            headers:{
               'content-type':'application/json',
               'user-id': testData.userId
            }
        }).then((response) => { 
            expect(response.status).to.eq(200)
        }) 
    })
  })