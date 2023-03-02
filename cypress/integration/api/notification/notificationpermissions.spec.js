describe('/api/NotificationPermissions endpoint api test', () => {
    let testData;
    beforeEach(function () {
      cy.fixture(`data_${Cypress.env('fileConfig')}.json`).then(function(regdata){
        testData = regdata;
        return testData;
    })
  })
    it.only('Receive valid HTTP response code 200 for /api/NotificationPermissions get request', () => {
         cy.request({
             method: 'GET',
             url: Cypress.env('notification-api')+'/api/NotificationPermissions',
             headers:{
                'user-id': testData.userId
             }
         }).then((response) => { 
             expect(response.status).to.eq(200)
             expect(response.body.success).to.eq(true)
             assert.isNotNull(response.body.data)
         }) 
     })
     it.only('Receive valid HTTP response code 200 for /api/NotificationPermissions patch request', () => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('notification-api')+'/api/NotificationPermissions',
            body: {
                "smsOptIn": true,
                "emailOptIn": true,
                "phoneCallOptIn": false,
                "whatsappOptIn": false
            },
            headers:{
               'content-type':'application/json',
               'user-id': testData.userId
            }
        }).then((response) => { 
            expect(response.status).to.eq(200)
            expect(response.body.success).to.eq(true)
            assert.isNotNull(response.body.data)
        }) 
    })
  })