/// <reference types="cypress" />

describe("Llena los campos para una nueva cita y la elimina", () => {
  it("Campos nueva cita", () => {
    cy.visit("/index.html");

    cy.get("[data-cy=mascota-input]").type("Pelusa");
    cy.get("[data-cy=propietario-input]").type("Juan");
    cy.get("[data-cy=telefono-input]").type("5641616316");
    cy.get("[data-cy=fecha-input]").type("2021-03-01");
    cy.get("[data-cy=hora-input]").type("13:30");
    cy.get("[data-cy=sintomas-input]").type("Cansancio");
    cy.get("[data-cy=submit-cita]").click();

    cy.get("[data-cy=citas-heading]")
      .invoke("text")
      .should("equal", "Administra tus Citas");

    cy.get("[data-cy=alerta")
      .should("have.class", "alert-success")
      .invoke("text")
      .should("equal", "Se agregó correctamente");
  });

  it("Eliminar cita", () => {
    cy.get("[data-cy=btn-eliminar]").click();

    cy.get("[data-cy=alerta")
      .should("have.class", "alert-success")
      .invoke("text")
      .should("equal", "Cita eliminada correctamente");

    cy.get("[data-cy=citas-heading]")
      .invoke("text")
      .should("equal", "No hay Citas, comienza creando una");

    cy.screenshot();
  });
});
