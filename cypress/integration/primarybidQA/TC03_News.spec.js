describe('News Tab Link', function () {
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
     cy.contains('News').should('be.visible').click()
     cy.contains('Featured Content').should('be.visible')
     cy.contains('All Content').should('be.visible')
     cy.wait(3000);
     cy.get('[data-testid=news-filter-button]').click()
     cy.wait(3000);
     cy.get('[data-testid=news-filter-checkbox-Webinar')
     .click({force:true}); 
    
  


     
    })
})




