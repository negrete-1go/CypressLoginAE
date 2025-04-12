before(() => {

  //to maximize window
  cy.maximize();
  // Load 'userData.json' fixture and alias it as 'userData'
  cy.fixture('userLogin.json').then((userLogin) => {
    cy.wrap(userLogin).as('userLogin');  // Alias the fixture for later use
  });
});
