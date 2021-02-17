/// <reference types="cypress" />

describe("Validar formulario", () => {
  it("Submit al formulario", () => {
    cy.visit(
      "/index.html"
    );

    cy.get("[data-cy=formulario]").submit();

    cy.get("[data-cy=alerta")
      .should("have.class", "alert-danger")
      .invoke("text")
      .should("equal", "Todos los campos son Obligatorios");
  });
});
