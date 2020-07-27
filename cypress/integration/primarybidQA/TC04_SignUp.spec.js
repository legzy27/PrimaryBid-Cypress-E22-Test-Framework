describe('SignUp Tab Link', function () {
    it('Navigate To Sign Up Page ', function(){
        const username = Cypress.env('username')
        const password = Cypress.env('password')
        cy.visit('https://playground.primarybid.com', {
     auth: {
        username: username,
        password: password

     },
})

cy.wait(3000);
cy.contains('Sign up').should('be.visible').click()

function Name_Alpha_Email() {
    var text = "";
    var possible = "abcdefghijk123456";
 
    for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
 
    return text + "@gmail.com";
 }
 
 //generate the email and store it in a variable
 const randomEmail = Name_Alpha_Email()
 cy.get('input[name="email"]').type(randomEmail)
 cy.wait(3000);

 cy.get('input[name="password"]').type('Allstar27')
 cy.wait(3000);
 cy.get('input[name="confirmPassword"]').type('Allstar27')
 cy.wait(3000);
 cy.get('.cta-1').click()
 cy.wait(3000);

    })


})

