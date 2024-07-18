describe('Marcando inputs do tipo radio', () => {
  // Inputs do tipo radio são campos de seleção única
  beforeEach(() => {
    cy.visit('./src/index.html')

    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  });

  it('Marcar o tipo de atendimento Feedback', () => {
    // aqui passamos o valor(es) do atributo html "value" do elemento checkbox ou radio
    // podemos passar um array também de values no check, caso o site permita
    //cy.get('input[type="radio"][value="feedback"]').check('feedback')
    cy.get('input[type="radio"]').check('feedback')
    cy.get('input[value="feedback"]').should('be.checked')
  });

  it('Marcar todos os valores possíveis', () => {
    cy.get('input[type="radio"]').each((elemento) => {
      cy.wrap(elemento).check()
      cy.wrap(elemento).should('be.checked')
    })
  });
});