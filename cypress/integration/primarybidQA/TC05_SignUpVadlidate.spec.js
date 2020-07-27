describe('SignUp Validate Link', function () {
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
   var possible = "primary1233456789@yahoo.com";

   for (var i = 0; i < 10; i++)
   text += possible.charAt(Math.floor(Math.random() * possible.length));

   return text;
}

//generate the string and store it in a variable
const randomEmail = Name_Alpha_Email()
cy.get('input[name="email"]').type(randomEmail)
cy.wait(3000);



    function Name_Alpha_Password() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   
      for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
   
      return text;
   }
   

   const randomPassword = Name_Alpha_Password()
   cy.get('input[name="password"]').type(randomPassword)
   cy.wait(3000);





   function Name_Alpha_Confirmpassword() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   
      for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
   
      return text;
   }
   
   const randomConfirmpassword = Name_Alpha_Confirmpassword()
   cy.get('input[name="confirmPassword"]').type(randomConfirmpassword)
   cy.wait(3000);

   cy.get('.cta-1').click()



   })

})