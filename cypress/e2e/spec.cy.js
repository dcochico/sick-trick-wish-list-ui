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

  it("Should display tricks' information", () => {
    cy.get('.card-container').first().contains('p', 'regular')
    cy.get('.card-container').first().contains('p', 'treflip')
    cy.get('.card-container').first().contains('p', 'flat ground')
    cy.get('.card-container').first().contains('p', 'https://www.youtube.com/watch?v=XGw3YkQmNig')
    cy.get('.card-container').last().contains('p', 'regular')
    cy.get('.card-container').last().contains('p', 'frontside 50-50, backside 180 out')
    cy.get('.card-container').last().contains('p', 'ledge')
    cy.get('.card-container').last().contains('p', 'https://www.youtube.com/watch?v=9N9swrZU1HA')
  })

  it('Should use the form inputs to add and display a new trick', () => {
    cy.get('select').first().select('Regular')
      .invoke('val').should('eq', 'Regular')
      .get('input').first().type('Kickflip')
      .invoke('val').should('eq', 'Kickflip')
      .get('select').last().select('Flatground')
      .invoke('val').should('eq', 'Flatground')
      .get('input').last().type('example.com')
      .invoke('val').should('eq', 'example.com')
      .get('button').click()
      .get('.card-container').contains('p', 'Regular')
      .get('.card-container').contains('p', 'Kickflip')
      .get('.card-container').contains('p', 'Flatground')
      .get('.card-container').contains('p', 'example.com')
  })
})