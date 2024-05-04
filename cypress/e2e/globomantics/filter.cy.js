/// <reference types="Cypress" />
import 'cypress-mochawesome-reporter/register';
import { filterConstants } from "../../support/filterFeature/filterConstants.cy";
import { filterPage } from "../../support/filterFeature/filterPage.cy";

describe("Filter feature", () => {
  beforeEach(() => {
    cy.visit('/');
  });

  for (let i = 0; i < filterConstants.dayArray.length; i++) {
    it("Filter the sessions by specific day", () => {
      filterPage.clickFilter(filterConstants.dayArray[i]);
      filterPage.checkFilterSessionByDay(filterConstants.dayArray[i]);
    });
  }
});
