import {Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("the user is on sessions page", () => {
  cy.visit("http://localhost:1337/conference/sessions");
});
When("the user clicks on Submit a session button", () => {
  cy.get('a[href="/conference/sessions/new"]').click();
});
Then("the user is redirected to the Submit a session page", () => {
  cy.url().should('contain', "/conference/sessions/new");
});