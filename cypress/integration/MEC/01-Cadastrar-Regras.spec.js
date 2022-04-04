/// <reference types="cypress" />

context('Múltiplas Empresas de Cobrança', () => {


    beforeEach(function () {
        cy.visit('/')
        cy.fixture("dados-mec").as('mec').then(() => {})
    })

    it('Cadastrar regras', function () {
        cy.url().should('eq', 'https://mecfrontendhomologacao.grupotiradentes.com/')
            .get('.jss12 > .jss22 > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click()
            .get('span').contains('Regras').click()
            .url().should('eq', 'https://mecfrontendhomologacao.grupotiradentes.com/regras')
            .get('span').contains('Cadastro de Regras').click()
            .wait(this.mec.break)
            .url().should('eq', 'https://mecfrontendhomologacao.grupotiradentes.com/regras/cadastrar')
            .wait(this.mec.break)
            .get('[name="instituicao"]').type('unit{downarrow}{enter}', {force: true})
            /*.get('input[name=""]').type('')
            .get('input[name=""]').type('')
            .get('input[name=""]').type('')
            .get('input[name=""]').type('')
            .get('input[name=""]').type('')
            .get('input[name=""]').type('')
            .get('input[name=""]').type('')*/
    });

})