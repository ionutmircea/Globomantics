/// <reference types="Cypress" />
import { submitConstants } from "./submitConstants.cy";
import { submitLocators } from "./submitLocators.cy";

class SubmitPage {

  //Check if Submit a session button is redirected to Submit a session page
  checkRedirectOfSubmitSessionBtn() {
    cy.get(submitLocators.submitSessionBtn)
      .contains('Submit a Session!')
      .should('be.visible');
    cy.get('a[href="/conference/sessions/new"]').click();
    cy.url().should('contain', "/conference/sessions/new");
  }

  //Check if all requierd fields are displayed
  checkAllTheRequiredFieldsAreDisplayed() {
    cy.get('a[href="/conference/sessions/new"]').click();
    cy.get(submitLocators.submitSessionTitle)
      .contains('Submit a Session!')
      .should('be.visible');
    cy.get(submitLocators.submitFormTitleLabel)
      .contains('Title')
      .should('be.visible');
    cy.get(submitLocators.submitFormDescriptionLabel)
      .contains('Description')
      .should('be.visible');
    cy.get(submitLocators.submitFormDayLabel)
      .contains('Day')
      .should('be.visible');
    cy.get(submitLocators.submitFormLevelLabel)
      .contains('Level')
      .should('be.visible');
    cy.get(submitLocators.submitFormRoomLabel)
      .contains('Room')
      .should('be.visible');
    cy.get(submitLocators.submitFormTimeLabel)
      .contains('Hour')
      .should('be.visible');
    cy.get(submitLocators.submitBtn)
      .contains('Submit')
      .should('be.visible');
  }

  //Create random title
  createRandomTitle(){
    const uuid = () => Cypress._.random(0, 1e6);
    const id = uuid();
    const title = `Cypress automation training ${id}`;
    return title;
  }

  //Create a new session
  createNewSession(title) {
    title = this.createRandomTitle();
    cy.get(submitLocators.submitSessionBtn).click();
    cy.get(submitLocators.submitFormTitleInput).type(title);
    cy.get(submitLocators.submitFormDescriptionInput).type(submitConstants.description,{ delay: 0 });
    cy.get(submitLocators.submitFormDayInput).type(submitConstants.day);
    cy.get(submitLocators.submitFormLevelInput).type(submitConstants.level);
    cy.get(submitLocators.submitBtn).click();
  }

  //Check successful message after create a session
  checkSuccessfulMessage(){
    cy.get(submitLocators.succesMessage).should('have.text', submitConstants.succesMessageText);
  }

  //Check validation mandatory fields
  checkMandatoryFields(){
    cy.get(submitLocators.submitSessionBtn).click();
    cy.get(submitLocators.allSubmitInputs).eq(0).should('have.attr', 'required');
    cy.get(submitLocators.allSubmitInputs).eq(0).should('have.attr', 'value');
    cy.get(submitLocators.allSubmitInputs).eq(1).should('have.attr', 'required');
    cy.get(submitLocators.allSubmitInputs).eq(1).should('have.attr', 'value');
    cy.get(submitLocators.allSubmitInputs).eq(2).should('have.attr', 'required');
    cy.get(submitLocators.allSubmitInputs).eq(2).should('have.attr', 'value');
    cy.get(submitLocators.allSubmitInputs).eq(3).should('have.attr', 'required');
    cy.get(submitLocators.allSubmitInputs).eq(3).should('have.attr', 'value');
  }
  
}

export const submitPage = new SubmitPage();
