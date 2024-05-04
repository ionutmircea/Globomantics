/// <reference types="Cypress" />
import 'cypress-mochawesome-reporter/register';
import { submitPage } from "../../support/submitFeature/submitPage.cy";
import { filterPage } from "../../support/filterFeature/filterPage.cy";


describe("Submit feature", () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it("Submit a session button redirects to Submit a session page", () => {
    submitPage.checkRedirectOfSubmitSessionBtn();
  });

  it("Submit form have all the required fields", () => {
    //This test will failed because room and time are not displayed in the form
    submitPage.checkAllTheRequiredFieldsAreDisplayed();
  });

  it("Submit new session with valid data", () => {
    var title = '';
    submitPage.createNewSession(title);
    submitPage.checkSuccessfulMessage();
    filterPage.checkCreatedSession(title);
  });
   
  it('User cannot save an empty Submit session form', () => {
      submitPage.checkMandatoryFields();
  });

});
