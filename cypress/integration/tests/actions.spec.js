/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })


  it('Teste para criar conta', () => {
    cy.get('.new-user').click()
    cy.get('#formBasicUsername')
      .type('fakename').should('have.value', 'fakename')
    
    cy.get('#formBasicEmail')
      .type('fake@email.com').should('have.value', 'fake@email.com')

    cy.get('#formBasicPassword')
      .type('fakepassword')

    cy.get('#formBasicConfirmPassword')
      .type('fakepassword')

    cy.get('.btn-primary').click()
      
  });

  it('Teste entrar e sair da conta', () => {
    cy.get('#formBasicUsername')
      .type('fakename').should('have.value', 'fakename')
    
    cy.get('#formBasicPassword')
      .type('fakepassword')

    cy.get('.btn-primary').click()

    cy.get('.right-content-navbar p').click()
  });

  it('Teste entrar e cadastrar produto', () => {
    cy.get('#formBasicUsername')
      .type('fakename').should('have.value', 'fakename')
    
    cy.get('#formBasicPassword')
      .type('fakepassword')

    cy.get('.btn-primary').click()

    cy.get('#register-button').click()

    cy.get('#productName')
      .type('feijoada')

    cy.get('#productcost')
      .type('10')

    cy.get('#productprice')
      .type('15')
  });

  it('Teste entrar e cadastrar venda', () => {
    cy.get('#formBasicUsername')
      .type('fakename').should('have.value', 'fakename')
    
    cy.get('#formBasicPassword')
      .type('fakepassword')

    cy.get('.btn-primary').click()

    cy.get('.box-footer-content .box-product-wrapper #register-button').click()

    cy.get('#quantitysale')
      .type('2')

    cy.get('#adicionarvenda').click()

  });

  it('Teste entrar no modal de cadastrar venda, digitar algo e sair', () => {
    cy.get('#formBasicUsername')
      .type('fakename').should('have.value', 'fakename')
    
    cy.get('#formBasicPassword')
      .type('fakepassword')

    cy.get('.btn-primary').click()

    cy.get('.box-footer-content .box-product-wrapper #register-button').click()

    cy.get('#quantitysale')
      .type('2')

    cy.get('#sairbutton').click()

  });




});
