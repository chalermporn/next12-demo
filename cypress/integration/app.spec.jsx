describe('Navigation', () => {
  it('should navigate to the HOme page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // The new page should contain an h1 with "Home page"
    cy.get('h1').contains('Welcome to Next.js!')
  })
})