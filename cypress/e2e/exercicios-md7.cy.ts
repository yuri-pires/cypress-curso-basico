describe('Testes com links que abrem outra aba', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  });

  it('Verifica que a política de privacidade abre em outra aba sem a necessidade de clicar nele', () => {
    //cy.get('#privacy a') busca o elemento a dentro do id privacy
    cy.get('a[href="privacy.html"]').should('have.attr', 'target', '_blank')
  });

  it('Visitar outra página removendo o atributo target do elemento âncora', () => {
    // invoke realiza funcoes de remoção de elementos e atributos do html
    cy.get('#privacy a').invoke('removeAttr', 'target').click()

    // Podemos usar o contains passando somente texto pra achar esse valor em 
    // qualquer objeto html
    cy.contains('Talking About Testing').should('be.visible')
  });

  it.only('Testa a página de politíca de privacidade de forma independente', () => {
    cy.visit('./src/privacy.html')
    cy.contains('Talking About Testing').should('be.visible')
  });
});