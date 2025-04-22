describe('Test selection boxes', () => {
    it('should check if the selection box changes to blue', () => {
      cy.visit('/'); // Make sure you're visiting the correct page
      cy.get('[data-testid="blue"]').should('be.visible');
    });
  
    it('should check if the selection box changes to orange', () => {
      cy.visit('/');
      cy.get('[data-testid="orange"]').should('be.visible');
    });
  
    it('should check if the selection box changes to green', () => {
      cy.visit('/');
      cy.get('[data-testid="green"]').should('be.visible');
    });
  });
  