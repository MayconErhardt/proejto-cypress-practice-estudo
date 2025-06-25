describe('Login', () => {


    const userName = 'student'
    const password = 'Password123'

    beforeEach(() => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    })


    it('Login com sucesso', () => {
        cy.funcLogin(userName, password)
    })


    it('Login com email vazio', () => {
        cy.viewport(1280, 720)
        cy.get('#username').type(123456)
        cy.get('#password').type(password)
        cy.get('#submit').click()
        cy.get('#error').should('be.visible', 'Your username is invalid!')

    })

    it('Senha errada', () => {
        cy.viewport(1280, 720)
        cy.get('#username').type(userName)
        cy.get('#password').type(123456)
        cy.get('#submit').click()
        cy.get('#error').should('be.visible', 'Your password is invalid!')
    })

    it('Login sem senha e email',() =>{
        cy.get('#submit').click()
        cy.get('#error').should('be.visible', 'Your username is invalid!')
    })

    it.only('Realizando log out',()=>{
        cy.funcLogin(userName,password)
        cy.get('.wp-block-button__link').click()
        cy.get('h2').should('be.visible', 'Test login')
    })
})