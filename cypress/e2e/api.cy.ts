describe('Teste Api Rest', () => {
  it('Testar request', () => {
    cy.request({
      method: 'GET',
      url: 'https://api.restful-api.dev/objects'
    }).then((response) => {
      expect(response.status).to.eq(200)

      cy.addTestContext(`Response: \n${JSON.stringify(response.body)}`)
    })
  });
});