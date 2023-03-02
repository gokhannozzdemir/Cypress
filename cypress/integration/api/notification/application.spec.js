describe('/status endpoint api test', () => {
   it('Receive valid HTTP response code 200 for status endpoint', () => {
        cy.request({
            method: 'GET',
            url: Cypress.env('notification-api')+'/status'
        }).then((response) => { 
            expect(response.status).to.eq(200);
            assert.isString(response.body)
            assert.equal('OK!',response.body)
        }) 
    });
 });

 