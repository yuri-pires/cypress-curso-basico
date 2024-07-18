describe('Central de atendimento CAC', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')

    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  });

  it('Preencher todos os campos da página', () => {
    cy.get('#firstName')
      .type('Yuri')

    cy.get('#lastName')
      .type('Pires')

    //exercicio de adicionar delay na digitacao de cada caracter
    cy.get('#email')
      .type('yuripires@gmail.com', { delay: 10 })

    cy.get('#phone')
      .type('999796003')

    cy.get('#open-text-area')
      .type('Satisfeito')

    cy.get('button[type="submit"]')
      .click()

    cy.get('.success')
      .should('be.visible')
  });

  it('Exibir mensagem de erro ao enviar um email inválido', () => {
    cy.get('#firstName').type('Yuri')

    cy.get('#lastName').type('Pires')

    cy.get('#email').type('yuripiresgmail.com')

    cy.get('#phone').type('999796003')

    cy.get('#open-text-area').type('Satisfeito')

    cy.get('button[type="submit"]').click()

    //para validar varias condições é indicado utilizar o AND
    cy.get('.error')
      .should('be.visible')
      .and('have.text', 'Valide os campos obrigatórios!')
  });

  //exercicio 4 md 2
  it('O campo telefone continua vazio ao ser inserido uma string', () => {
    cy.get('#phone')
      .type('yuri')
      .should('have.value', '')
  });

  //exercicio 5 md 2
  it('Preencher e limpar os campos após digitacão', () => {
    cy.get('#firstName')
      .type('Yuri')
      .should('have.value', "Yuri")
      .clear()
      .should('have.value', '')
  });

  //exercio 6 md 2
  it('Não preencher os campos obritórios e obter mensagem de erro ', () => {
    cy.get('button[type="submit"]').click()

    //para validar textos com espaco é indicado usar o encadeamento com contains
    cy.get('.error')
      .should('be.visible')
      .and('contain.text', 'Valide os campos obrigatórios!')
  });


  //exercicio 7 md 2
  it('Utilizar um customCommand para preencher o formulario', () => {
    cy.preencherFormularioDeSatisfacaoComCamposObrigatorios()

    cy.get('button[type="submit"]').click()
    cy.get('.success')
      .should('be.visible')
      .and('have.text', 'Mensagem enviada com sucesso.')
  });

  //exercicio 8 md 2
  it.only('Capturar comando com cy.contains', () => {
    cy.preencherFormularioDeSatisfacaoComCamposObrigatorios()

    cy.contains('button', 'Enviar').click()
    cy.addTestContext('Yuri espinosa pires yuri espinosa')
  });

});