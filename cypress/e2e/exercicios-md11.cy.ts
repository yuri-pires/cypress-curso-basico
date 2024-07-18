describe('Testes com lodash e funcionalidades de relógio', () => {
  // criar constantes ao invés de usar números mágicos
  const TEMPO_EM_SEGUNDOS: number = 3000
  beforeEach(() => {
    cy.visit('./src/index.html')

    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  });

  it('Controlar o tempo de exibição de uma mensagem', () => {
    cy.clock() // congelamos o tempo do navegador
    cy.preencherFormularioDeSatisfacaoComCamposObrigatorios()

    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible').and('contain.text', 'Mensagem enviada com sucesso.')

    // Avancamos o relogio do navegador em 3 segundos para nao esperar o timeout
    // que faz a mensagem sumir
    // Essa funcionalidade é muito útil para não perdermos tempo esperando mensagens e toasts sumirem
    cy.tick(TEMPO_EM_SEGUNDOS)
    cy.get('.success').should('not.be.visible')
  });

  Cypress._.times(3, () => {
    it('Utilizando o lodash .times para executar um callback X vezes', () => {
      cy.visit('./src/privacy.html')
      cy.contains('Talking About Testing').should('be.visible')
    });
  })

  it('Exibe e esconde as mensagens de sucesso e erro usando o .invoke()', () => {
    cy.get('.success')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Mensagem enviada com sucesso.')
      .invoke('hide')
      .should('not.be.visible')

    cy.get('.error')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Valide os campos obrigatórios!')
      .invoke('hide')
      .should('not.be.visible')
  });


  it.only('Preenche a area de texto usando o metodo invoke', () => {
    // Repetir um texto X vezes
    const longText: string = Cypress._.repeat('8574584758', 10)

    // Chamamos o método invoke para preencher o valor de longText nesse elemento
    // O invoke não digita, elke invoca diretamente o valor no campo, sendo muito mais rápido
    // invoke val funciona em text area e inputs de texto
    cy.get('#open-text-area').invoke('val', longText)
  });
});