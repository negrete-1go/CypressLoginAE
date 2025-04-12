class LoginPage {
    visit() {
      cy.visit('/loginpagePractise/');
    }
  
    get usernameField() {
      return cy.get('input[name="username"]');
    }
  
    get passwordField() {
      return cy.get('input[name="password"]');
    }
  
    get loginButton() {
      return cy.get('input[type="submit"]');
    }
  
    login(username, password) {
      this.usernameField.type(username);
      this.passwordField.type(password);
      this.loginButton.click();
    }
  }
  
  export default new LoginPage();