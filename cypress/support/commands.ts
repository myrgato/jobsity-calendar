Cypress.Commands.add("addReminder", () => {
  cy.get(":nth-child(1) > [data-test-id=table-cell-0]").click();
  cy.findByTestId("text-field-description").type("Testing");
  cy.findByTestId("button-commit").click();
});

export {};
