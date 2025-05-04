Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

it('should highlight even numbers and leave odd numbers unhighlighted', () => {
  cy.visit('https://demoqa.com/automation-practice-form');

  cy.get('input[id=firstName]').type('Sarmīte');
  cy.get('input[id=lastName]').type('Endzele');
  cy.get('input[id=userEmail]').type('sarmulise@gmail.com');
  cy.get('input[id=gender-radio-2]').check({ force: true });
  cy.get('input[id=userNumber]').type('6537126385');
  cy.get('input[id=dateOfBirthInput]').click();
  cy.get('select.react-datepicker__month-select').select('1');
  cy.get('select.react-datepicker__year-select').select('1930');
  cy.get('div.react-datepicker__day--028').not('.react-datepicker__day--outside-month').first().click();
  cy.get('div.subjects-auto-complete__input').type('Economics{enter}');
  cy.get('input[id=hobbies-checkbox-3').check({ force: true });
  cy.get('input[id=uploadPicture]').selectFile('cypress/fixtures/myImage.jpg');
  cy.get('textarea[id=currentAddress').type('Putnu iela 21');
  cy.get('#state').click(); 
  cy.contains('.css-1n7v3ny-option', 'NCR').click(); 
  cy.get('#city').click(); 
  cy.contains('.css-1n7v3ny-option', 'Delhi').click(); 
  cy.get('button[id=submit]').click();

  //pārbaude
  cy.contains('td', 'Student Name').next().should('have.text', 'Sarmīte Endzele');
  cy.contains('td', 'Student Email').next().invoke('text').should('match', /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  cy.contains('td', 'Gender').next().should('have.text', 'Female');
  cy.contains('td', 'Mobile').next().invoke('text').should('match', /^\d+$/);
  cy.contains('td', 'Date of Birth').next().should('have.text', '28 February,1930');
  cy.contains('td', 'Subjects').next().should('have.text', 'Economics');
  cy.contains('td', 'Hobbies').next().should('have.text', 'Music');
  cy.contains('td', 'Picture').next().should('have.text', 'myImage.jpg');
  cy.contains('td', 'Address').next().should('have.text', 'Putnu iela 21');
  cy.contains('td', 'State and City').next().should('have.text', 'NCR Delhi');

})