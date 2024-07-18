describe('Testes com viewport mobile em modo headless', () => {
  it('Realizar prenchimento do formulário', () => {
    cy.preencherFormularioDeSatisfacaoComCamposObrigatorios()

    cy.get('button[type="submit"]').click()
    
    cy.get('.success')
      .should('be.visible')
      .and('have.text', 'Mensagem enviada com sucesso.')
  });
});