class DashboardPage {
    login() {
        cy.LoginAPI().then(function() {  
            cy.visit('/client', 
            {
                   onBeforeLoad: function(window)
                   {
                    window.localStorage.setItem('token', Cypress.env('token'))
                   } 
            })
        })         
    }

    verifyDashboardIsVisible() {
      cy.url().should('include', '/client/#/dashboard/dash');
    }
  }
  
  export default new DashboardPage();