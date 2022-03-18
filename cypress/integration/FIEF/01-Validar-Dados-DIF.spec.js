/// <reference types="cypress" />

context('DILUIÇÃO FACILITADA', () => {


    beforeEach(function () {
        cy.visit('/mj0Esbr7xGAkqlvptd8bFw==')
        cy.fixture("dados-dif").as('dif').then(() => {
            cy.wait(this.dif.break)
        })
    })

    it('Pagamento por boleto - Sem Diluição', function () {
        cy.url().should('eq', 'https://dif-dev.herokuapp.com/dif/detalhes-pagamento/mj0Esbr7xGAkqlvptd8bFw==')
          .wait(this.dif.break)
          .get('.personal-info > :nth-child(1) > :nth-child(2)').should('have.text', this.dif.aluno)
          .get('.personal-info > :nth-child(3) > :nth-child(2)').should('have.text', this.dif.curso)
          .get('.personal-info > :nth-child(5) > :nth-child(2)').should('have.text', this.dif.matricula)
          .get(':nth-child(7) > :nth-child(2)').should('have.text', this.dif.campus)
          .get('tbody > :nth-child(1) > :nth-child(2)').contains('R$ 1.077,74').should('be.visible')
          .get('.btn-regular').click()
          .get('.boleto-tab > :nth-child(3) > .d-flex > :nth-child(1)').should('have.text', this.dif.valorFinalBoleto)
          .get('.boleto-tab > :nth-child(3) > .d-flex > :nth-child(2)').should('have.text', this.dif.vencimentoBoleto)
          //.get('.codigo-boleto > span').should('have.text', this.dif.codBoleto)
          .get('.boleto-tab > :nth-child(4) > :nth-child(2)').should('have.text', this.dif.msgPagamento)
          .get('.copy-area > .btn-regular-outlined').click()
          .get('.Toastify__toast-body > :nth-child(2)').should('be.visible')   
    });

})