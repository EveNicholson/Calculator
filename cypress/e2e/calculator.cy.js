describe('Calculator App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); 
  });

  it('Number buttons update the display of the running total', () => {
    cy.get('[data-testid=running-total]').should('have.text', '0');

    cy.contains('2').click();
    cy.get('[data-testid=running-total]').should('have.text', '2');

    cy.contains('5').click();
    cy.get('[data-testid=running-total]').should('have.text', '25');
  });

  it('Arithmetical operations update the display with the result of the operation', () => {
    cy.contains('2').click();
    cy.contains('+').click();
    cy.contains('2').click();
    cy.contains('=').click();

    cy.get('[data-testid=running-total]').should('have.text', '4');
  });

  it('Multiple operations can be chained together', () => {
    cy.contains('3').click();
    cy.contains('+').click();
    cy.contains('1').click();
    cy.contains('-').click();
    cy.contains('2').click();
    cy.contains('=').click();

    cy.get('[data-testid=running-total]').should('have.text', '2');
  });

  it('The output is as expected for positive numbers', () => {
    cy.get('[data-testid=number5]').click();
    cy.get('[data-testid=operator-multiply]').click();
    cy.get('[data-testid=number3]').click();
    cy.get('[data-testid=operator-equals]').click();
  
    cy.get('[data-testid=running-total]').should('have.text', '15');
  });
  

  it('The output is as expected for negative numbers', () => {
    cy.contains('5').click();
    cy.contains('-').click();
    cy.contains('8').click();
    cy.contains('=').click();

    cy.get('[data-testid=running-total]').should('have.text', '-3');
  });

  it('The output is as expected for decimal numbers', () => {
    cy.get('[data-testid=number0]').click();
    cy.get('[data-testid=decimal]').click();
    cy.get('[data-testid=number5]').click();
    cy.get('[data-testid=operator-add]').click();
    cy.get('[data-testid=number0]').click();
    cy.get('[data-testid=decimal]').click();
    cy.get('[data-testid=number2]').click();
    cy.get('[data-testid=operator-equals]').click();
  
    cy.get('[data-testid=running-total]').should('have.text', '0.7');
  });
  

  it('The output is as expected for decimal numbers', () => {
    cy.get('[data-testid=number0]').should('be.visible').click();
    cy.get('[data-testid=decimal]').should('be.visible').click();
    cy.get('[data-testid=number5]').should('be.visible').click();
    cy.get('[data-testid=operator-add]').should('be.visible').click();
    cy.get('[data-testid=number0]').should('be.visible').click();
    cy.get('[data-testid=decimal]').should('be.visible').click();
    cy.get('[data-testid=number2]').should('be.visible').click();
    cy.get('[data-testid=operator-equals]').should('be.visible').click();
  
    cy.get('[data-testid=running-total]').should('have.text', '0.7');
  });
  
});
