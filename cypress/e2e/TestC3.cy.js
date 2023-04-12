describe('Select date in November 2024 with right arrow keys and validate', () => {
  it('should select a date and validate it', () => {
    let dateToSelect = '11/20/2024' 
    let monthToSelect = dateToSelect.split('/')[0]
    let dayToSelect = dateToSelect.split('/')[1]
    let yearToSelect = dateToSelect.split('/')[2]
    const dateObj = new Date(yearToSelect, monthToSelect - 1)
    const monthName = dateObj.toLocaleString('default', { month: 'long' });
    // Open the website with the date picker
    cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
    // Click on the date picker
    cy.get('#datepicker')
    .click()
    // Verify that the current year is displayed in the date picker
    cy.get('.datepicker-switch')
    .should('contain', new Date().getFullYear())
    // If the current year is not the desired year, navigate to the desired year by ONLY clicking on the next button until the desired year is displayed in the date picker
    let currentMonth = Cypress.$('.datepicker-switch').text().trim()
    cy.log(currentMonth)
    function selectYearAndMonth(yearToSelect, monthName) {
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
    selectYearAndMonth(yearToSelect, monthName)
    // Click on a date in the desired year.
    cy.contains('td.day', dayToSelect)
    .click()
    // Verify that the date input field displays the selected date in the expected format (mm-dd-yyyy).
    dateToSelect = dateToSelect.replace(/\//g, '-')
    cy.get('.form-control')
    .should('have.value', dateToSelect)
  })
})