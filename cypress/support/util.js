export function selectYearAndMonth(yearToSelect, monthName) {
    cy.get('.datepicker-switch')
      .invoke('text')
      .then((text) => {
        if (text.includes(yearToSelect) && text.includes(monthName)) {
          cy.log(text)
        } else {
          cy.get('.datepicker-days > .table-condensed > thead > :nth-child(1) > .next')
            .click()
          selectYearAndMonth(yearToSelect, monthName)
        }
      })
  }