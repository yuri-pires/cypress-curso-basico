describe('Testes obtendo elementos suspensos', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')

    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  });

  //exercicio 1 md3
  it('Selecionar um Produto pelo seu texto', () => {
    //Mesmo selecionando pelo texto, o value de asserção é referente a tag html do elemento
    cy.get('#product').select('YouTube').should('have.value', 'youtube')
  });

  //exercicio 2 md3
  it('Selecionar objeto pelo seu value', () => {
    cy.get('select').select('mentoria').should('have.value', 'mentoria')
  });

  //exercicio 3 md3
  it('Selecionar objeto pelo seu indice no select', () => {
    cy.get('select').select(1).should('have.value', 'blog')
  });
});