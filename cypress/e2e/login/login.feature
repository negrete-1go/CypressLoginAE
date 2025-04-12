@login @smoke
Feature: User Login

Scenario: Valid login
  Given I visit the login page
  When I enter valid credentials
  Then I should be redirected to the dashboard

