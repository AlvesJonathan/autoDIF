/// <reference types="cypress" />

context('Múltiplas Empresas de Cobrança', () => {

    beforeEach(function () {
        cy.visit('/')
        cy.fixture("dados-mec").as('mec').then(() => {})
    })

    it('Cadastro de Parametros', function () {
        cy.url().should('eq', 'https://mecfrontendhomologacao.grupotiradentes.com/')//Validando Validando se a URL está correta
            //pedir para colocar um identificador no botão que expande o menu lateral
            .get('.jss12 > .jss22 > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click()//Botão de expandir menu
            //pedir para colocar um identificador nas abas que abrem as opções de menu
            .get('span').contains('Parâmetros de Envio').click()//clicando no menu para apresentar as opções
            .url().should('eq', 'https://mecfrontendhomologacao.grupotiradentes.com/parametros-de-envio')//Validando se a URL está correta com o click
            .get('span').contains('Cadastro de Parâmetros').click()//Clicando na opção de criar a regra
            //pedir para colocoar um identificador nas opções do menu lateral após expandir a aba
            .wait(this.mec.break)
            .url().should('eq', 'https://mecfrontendhomologacao.grupotiradentes.com/parametros-de-envio/cadastrar')//Validando se a URL está correta com o click
            .wait(this.mec.break)
            .get('input[name="instituicao"]').type('unit{downarrow}{enter}', {force: true})//inserindo um valor no campo Instituição de ensino
            .wait(this.mec.break)
            .get('input[name="modalidade"]').type('Graduação Presencial{downarrow}{enter}', {force: true})//Inserindo valor no campo Modalidade de ensino
            .wait(this.mec.break)
            .get('input[name="tipoTitulo"]').type('Parcela do Curso do Aluno{downarrow}{enter}', {force: true})//Inserindo valor no campo Tipo de título
            .wait(this.mec.break)
            .get('input[name="tituloAvulso"]').type('Negociação{downarrow}{enter}', {force: true})//Inserindo valor no campo Título Avulso
            .wait(this.mec.break)
            .get('input[name="situacaoAluno"]').type('Matriculado{downarrow}{enter}', {force: true})//Inserindo valor no campo Situação 
            .wait(this.mec.break)
            .get('input[name="curso"]').type('Direito Noturno{downarrow}{enter}', {force: true})//Inserindo valor no campo Curso
            .wait(this.mec.break)
            .get('input[name="empresaParceira"]').type('serasa{enter}', {force: true})//Inserindo valor no campo Empresa parceira
            .wait(this.mec.break)
            .get('input[name="dataInadimplenciaInicial"]').type('01012021{enter}', {force: true})//Inserindo valor no campo Data Inadimplencia Inicio
            .wait(this.mec.break)
            .get('input[name="dataInadimplenciaFinal"]').type('09022021{enter}', {force: true})//Inserindo valor no campo Data Inadimplencia Fim
            .wait(this.mec.break)
            .get('input[name="validadeLoteInicial"]').type('09022021{enter}', {force: true})//Inserindo valor no campo Validade de Lote Inicio
            .wait(this.mec.break)
            .get('input[name="validadeLoteFinal"]').type('09022021{enter}', {force: true})//Inserindo valor no campo Validade de Lote Fim
            .wait(this.mec.break)
            //Pedir para colocar identificador no botão SALVAR
            .get('').click()//Clicando no botão Salvar
            .wait(this.mec.break)
            //Pedir para colocar idenfiticador no botão CANCELAR
            .get('').click()//Clicando no botão Cancelar
            .wait(this.mec.break)
            .get('').should()//Valiando que foi cadastrado o parametro
    });

})