/// <reference types="cypress" />

context('Múltiplas Empresas de Cobrança', () => {

    beforeEach(function () {
        cy.visit('/')
        cy.viewport(1366, 768)
        cy.fixture("dados-mec").as('mec').then(() => {})
    })

    it('Cadastro de regra', function () {
        cy.url().should('eq', 'https://mecfrontendhomologacao.grupotiradentes.com/')//Validando Validando se a URL está correta
            //pedir para colocar um identificador no botão que expande o menu lateral
            .get('.jss12 > .jss22 > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click()//Botão de expandir menu
            //pedir para colocar um identificador nas abas que abrem as opções de menu
            .get('span').contains('Regras').click()//clicando no menu para apresentar as opções
            .url().should('eq', 'https://mecfrontendhomologacao.grupotiradentes.com/regras')//Validando se a URL está correta com o click
            //pedir para colocoar um identificador nas opções do menu lateral após expandir a aba
            .get('span').contains('Cadastro de Regras').click()//Clicando na opção de criar a regra
            .wait(this.mec.break)
            .url().should('eq', 'https://mecfrontendhomologacao.grupotiradentes.com/regras/cadastrar')//Validando se a URL está correta com o click
            .wait(this.mec.break)
            .get('input[name="instituicao"]').type('unit{downarrow}{enter}', {force: true})//inserindo valor no campo Instituição de ensino
            .wait(this.mec.break)
            .get('input[name="modalidade"]').type('Graduação Presencial{downarrow}{enter}', {force: true})//Inserindo valor no campo modalidade
            .wait(this.mec.break)
            .get('input[name="tipoTitulo"]').type('Parcela do Curso do Aluno{downarrow}{enter}', {force: true})//Inserindo valor no campo Tipo de Titulo
            .wait(this.mec.break)
            .get('input[name="situacao"]').type('Matriculado{downarrow}{enter}', {force: true})//Inserindo valor no campo situação do Aluno
            .wait(this.mec.break)
            .get('input[name="curso"]').type('Direito Noturno{downarrow}{enter}', {force: true})//Inserindo valor no campo de curso
            .wait(this.mec.break)
            .get('input[name="tituloAvulso"]').type('Negociação{downarrow}{enter}', {force: true})//Inserindo valor no campo Titulo Avulso
            .wait(this.mec.break)
            .get('input[name="inadimplenciaInicial"]').type('01012021{enter}', {force: true})//Inserindo valor no campo Data de inadimplencia Inicial
            .wait(this.mec.break)
            .get('input[name="inadimplenciaFinal"]').type('09022021{enter}', {force: true})//Inserindo valor no campo Data de inadimplencia Final
            .wait(this.mec.break)
            .get('input[name="validadeInicial"]').type('09022021{enter}', {force: true})//Inserindo valor no campo Validade da Negociação Inicial
            .wait(this.mec.break)
            .get('input[name="validadeFinal"]').type('09022021{enter}', {force: true})//Inserindo valor no campo Validade da Negociação Final
            .wait(this.mec.break)
            .get('input[name="status"]').check()//Selecioando a opção do campo Status
            .wait(this.mec.break)
            .get('input[name="percentJurosMultaAVista"]').type('40{enter}', {force: true})//Inserindo valor no campo desconto juros e multa - Pagamento a vista
            .wait(this.mec.break)
            .get('input[name="percentValorAVista"]').type('30{enter}', {force: true})//Inserindo valor no campo desconto valor principal - Pagamento a vista
            .wait(this.mec.break)
            .get('input[name="percentJurosMultaCartao"]').type('45{enter}', {force: true})//Inserindo valor no campo desconto juros e multa - Cartão
            .wait(this.mec.break)
            .get('input[name="percentValorCartao"]').type('25{enter}', {force: true})//Inserindo valor no campo desconto valor principal - Cartão
            .wait(this.mec.break)
            .get('input[name="quantidadeParcelasCartao"]').type('2{enter}', {force: true})//Inserindo valor no campo Quantidade de Parcelas - Cartão
            .wait(this.mec.break)
            .get('input[name="percentJurosMultaBoleto"]').type('20{enter}', {force: true})//Inserindo valor no campo desconto juros e multa- Boleto
            .wait(this.mec.break)
            .get('input[name="percentValorBoleto"]').type('40{enter}', {force: true})//Inserindo valor no campo desconto valor principal - Boleto
            .wait(this.mec.break)
            .get('input[name="percentEntradaBoleto"]').type('35{enter}', {force: true})//Inserindo valor no campo Entrada - Boleto
            .wait(this.mec.break)
            .get('input[name="quantidadeParcelasBoleto"]').type('2{enter}', {force: true})//Inserindo valor no campo Quantidade de Parcelas - Boleto
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