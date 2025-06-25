Cypress.Commands.add('funcLogin', (usuario,senha)=>{
    cy.viewport(1280, 720)
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha)
    cy.get('#submit').click()
    cy.get('.post-title').should('be.visible','Logged In Successfully')
})