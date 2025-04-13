class LoginPage {
    visit() {
      cy.visit('/client');
    }
  
    get usernameField() {
      return cy.get('#userEmail');
    }
  
    get passwordField() {
      return cy.get('#userPassword');
    }
  
    get loginButton() {
      return cy.get('#login');
    }
  
    login(username, password) {
      this.usernameField.type(username);
      this.passwordField.type(password);
      this.loginButton.click();
    }
  }
  
  export default new LoginPage();