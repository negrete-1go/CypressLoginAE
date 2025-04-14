Feature: Dashboard Access

  Scenario: User accesses dashboard with token
    Given I am logged in using a token
    When I visit the dashboard page
    Then I should see my dashboard content