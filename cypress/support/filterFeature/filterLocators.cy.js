class FilterPageLocators {
  allSessionCardsTitle = 'h3[data-cy="title"]';
  allSessionCardsLevel = 'h5[data-cy="level"]';
  allSessionCardsDay = 'h5[data-cy="day"]';
  allSessionFilter = 'button[class="btn-oval"]:eq(0)';
  dayFilter = 'button[class="btn-oval"]';
  wednesdayFilter = 'button[class="btn-oval"]:eq(1)';
  thurstdayFilter = 'button[class="btn-oval"]:eq(2)';
  fridayFilter = 'button[class="btn-oval"]:eq(3)';
  cardDay = 'h5[data-cy="day"]';

}

export const filterPageLocators = new FilterPageLocators();
