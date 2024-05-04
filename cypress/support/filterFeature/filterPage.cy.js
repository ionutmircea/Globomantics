/// <reference types="Cypress" />
import { submitConstants } from "../submitFeature/submitConstants.cy";
import { filterConstants } from "./filterConstants.cy";
import { filterPageLocators } from "./filterLocators.cy";

class FilterPage {

  //Check if the new card created is displayed in the session list
  checkCreatedSession(title){
    cy.visit("http://localhost:1337/conference/sessions")
    cy.contains(filterConstants.allSesions).click();
    cy.scrollTo('bottom');
    cy.get(filterPageLocators.allSessionCardsTitle).last().should('contain', title);
    cy.get(filterPageLocators.allSessionCardsLevel).last().should('contain', submitConstants.level);
    cy.get(filterPageLocators.allSessionCardsDay).last().should('contain', submitConstants.day);
  }

  clickFilter(day){
    cy.get(filterPageLocators.dayFilter).contains(day).click();
  }

  //Filter the sessions by specific day
  checkFilterSessionByDay(day){
   cy.get(filterPageLocators.cardDay).each(($cardDay) =>{
    expect($cardDay.text()).to.equal('Day: '+ day);
    });
  };
}

export const filterPage = new FilterPage();