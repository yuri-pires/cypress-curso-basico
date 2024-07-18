declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Comando customizado para preencher todos os campos do formulário de satisfacão
     * com dados genéricos
     * */
    preencherFormularioDeSatisfacaoComCamposObrigatorios(): void
  }
}