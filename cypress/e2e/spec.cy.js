describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks'), {
      statusCode: 200,
      fixture: 'tricks'
    }
    cy.visit('http://localhost:3000')
  })

  it('Should display title, form, and tricks', () => {
    cy.get('h1').contains('Sick Trick Wish List')
    cy.get('form').children().should('have.length', 5)
    cy.get('.tricks-container').children().should('have.length', 3)
  })
})