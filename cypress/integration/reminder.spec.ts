describe("testing the calendar page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should create a reminder", () => {
    cy.addReminder();
  });

  it("should delete a reminder", () => {
    cy.addReminder();
    cy.findByTestId("button-reminders-delete-0").click();
  });

  it("should delete all reminders", () => {
    cy.addReminder();
    cy.addReminder();
    cy.findByTestId("button-day-delete-all").click();
  });

  it("should edit a reminder", () => {
    cy.addReminder();
    cy.findByTestId("button-reminders-edit-0").click();
    cy.findByTestId("text-field-description").type("Edit");
    cy.findByTestId("button-commit").click();
  });
});

export {};
