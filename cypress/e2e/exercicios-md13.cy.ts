describe('', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  });

  it('Tornar o gato escondido vísivel', () => {
    cy.get('#cat').invoke('show').should('be.visible')

    // Invoke consegue manipular diversos elementos
    cy.get('#title').invoke('text', 'CAT CAT CAT')
  });
});