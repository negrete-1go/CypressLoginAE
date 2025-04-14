import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import DashboardPage from "../../pages/dashboardPage";



Given('I am logged in using a token', function() {
    DashboardPage.login();
    
  });
  
  When('I visit the dashboard page', function()  {
    DashboardPage.verifyDashboardIsVisible();
    
  });
  
  Then('I should see my dashboard content', function() {
    cy.get('#sidebar > p').should('contain.text', ' Home | ');
  });