Feature: EATest feature
    Test EA feature

Scenario: Test the login feature
    Given I visit EA site
    When I click login link
    # When I login as user with "admin" and "password"
    When I login as following
        | userName | Password |
        | admin    | password |

