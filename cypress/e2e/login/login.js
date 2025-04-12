import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/loginPage";


Given('I visit the login page', function() {
    LoginPage.visit();
  });
  
  When('I enter valid credentials', function()  {
    LoginPage.login(this.userLogin.user, this.userLogin.password);
  });
  
  Then('I should be redirected to the dashboard', function() {
    cy.url().should('include', '/angularpractice/shop');
  });