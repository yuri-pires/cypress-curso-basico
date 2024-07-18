describe('Upload de arquivos', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')

    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  });

  it('Seleciona um arquivo da pasta fixtures', () => {
    // Com uma arrow function, conseguimos capturar o objeto completo do input
    // que é obtido através do cy.get() e iterar sobre ele e seus valores
    cy.get('input[type="file"]')
      .selectFile('cypress/fixtures/teste.txt')
      .should((input) => {
        console.log(input)
        expect(input[0].files[0].name).to.equal('teste.txt')
      })
  });

  it('Seleciona um arquivo simulando um drag-drop', () => {
    cy.get('input[type="file"]')
      .selectFile('cypress/fixtures/teste.txt', { action: 'drag-drop' })
      .should((input) => {
        console.log(input)
        expect(input[0].files[0].name).to.equal('teste.txt')
      })
  });

  it('Seleciona um arquivo da pasta fixtures usando alias', () => {
    cy.fixture('teste.txt').as('arquivo')

    // Podemos usar o should para criar uma arrrow function chamando o elemento DOM
    // do seletor que capturamos, para entender melhor, pode-se usar um console.log
    // do parametro dessa arrow funtion, para ver o objeto completo no terminal
    // e escolher a melhor iteração sobre ele
    cy.get('input[type="file"]')
      .selectFile('@arquivo')
      .should((input) => {
        console.log(input)
        expect(input[0].files[0].name).to.equal('teste.txt')
      })
  });
});