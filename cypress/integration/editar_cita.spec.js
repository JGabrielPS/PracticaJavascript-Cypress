/// <reference types="cypress" />

describe("Llena los campos para una nueva cita y la edita", () => {
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

  it("Edita la cita", () => {
    cy.get("[data-cy=btn-editar]").click();

    cy.get("[data-cy=mascota-input]").clear().type("Nuevo Pelusa");
    cy.get("[data-cy=propietario-input]").clear().type("Pepe");
    cy.get("[data-cy=telefono-input]").clear().type("2222222");
    cy.get("[data-cy=fecha-input]").clear().type("2021-03-25");
    cy.get("[data-cy=hora-input]").clear().type("18:30");
    cy.get("[data-cy=sintomas-input]").clear().type("Sueño");
    cy.get("[data-cy=submit-cita]").click();

    cy.get("[data-cy=alerta")
      .should("have.class", "alert-success")
      .invoke("text")
      .should("equal", "Guardado Correctamente");
  });
});
