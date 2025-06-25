describe('Practice', () => {




    beforeEach(() => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    })

    function redirecionarParaPractice() {
        cy.get('#menu-item-20 > a').click()
        cy.contains('Test Exceptions').click();
        cy.get('h2').should('be.visible').and('contain.text', 'Test Exceptions')
    }

    it('Redirecionado para pagina Practice', () => {
        //Clica no menu 'PRACTICE'
        cy.get('#menu-item-20 > a').click()
        //VERIFICA O TITULO DA PAGINA
        cy.get('.post-title').should('be.visible', "Practice")
    })


    it.only('Indo para Test Exceptions', () => {
        // Clica no item de menu principal (menu de navegação do topo)
        cy.get('#menu-item-20 > a').click()
         // Dentro do menu, clica na opção com o texto "Test Exceptions"
        cy.contains('Test Exceptions').click();
        // Verifica se o título <h2> está visível e contém o texto correto
        cy.get('h2').should('be.visible') // Garante que o elemento está visível na tela
        .and('contain.text', 'Test Exceptions') // Garante que o texto dentro do h2 é "Test Exceptions"
    })



    it('Adicionar segunda linha', () => {
        redirecionarParaPractice() //acessa a URL
        cy.get('#add_btn').click() //CLICA NO BOTÃO PARA ADICIONAR LINHA
        cy.get('#confirmation', { timeout: 10000 }).should('be.visible').and('contain.text', 'Row 2 was added') // VALIDA O SUCESSO
    })

    it('Validar funcionalidade do botão “Edit', () => {
        //chama a função redirecionar
        redirecionarParaPractice()
        //clica no botão edit na linha 1
        cy.get('#row1 > #edit_btn').click()

        //verifica se o campo de input aparece
        cy.get('#row1 > .input-field').should('be.visible')

        //limpa e digita novo valor
        cy.get('.input-field').clear()
        cy.get('.input-field')
            .should('be.visible')
            .and('not.be.disabled')
            .clear().type("Carne")
            .should('be.visible')
            .and('have.value', 'Carne')
        cy.get('#save_btn').click()

        //verifica se a mensagem de status muda corretamente
        cy.get('#confirmation', { timeout: 10000 })
            .should('be.visible')
            .and('contain.text', 'Row 1 was saved')
    })
})