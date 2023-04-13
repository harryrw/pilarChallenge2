describe('Select date in November 2024 with right arrow keys and validate', () => {
  it('should select a date and validate it', () => {
    let dateToSelect = '11/20/2024'
    
    cy.visit('https://webdriveruniversity.com/Datepicker/index.html')

    cy.selectDate(dateToSelect)
    
  })
})
