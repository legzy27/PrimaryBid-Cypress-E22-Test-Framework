describe('FAQs Tab Link', function () {
    it('Navigate To FAQs Page ', function(){
        const username = Cypress.env('username')
        const password = Cypress.env('password')
        cy.visit('https://playground.primarybid.com', {
     auth: {
        username: username,
        password: password

     },
})
     cy.wait(3000);
     cy.contains('FAQs').should('be.visible').click()
     
    })
})

