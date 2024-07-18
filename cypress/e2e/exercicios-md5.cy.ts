describe('Testes com checkbox', () => {
   beforeEach(() => {
      cy.visit('./src/index.html')

      cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
   });
   //Inputs do tipo checkbox permitem a seleção de 1 ou muitos valores
   it('Marcar ambos checkboxes, depois desmarcar o último', () => {
      cy.get('input[type="checkbox"]')
         .check()
         .should('be.checked')

      cy.get('input[type="checkbox"]')
         .last()
         .uncheck()
         .should('not.be.checked')
   });
});
