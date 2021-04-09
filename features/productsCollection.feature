# 
# products Collection
# productsCollection.feature
#

@trial
Feature: Add new collection in Products

    As a user
    I should be able to create collection
    Because I want to sell my products

Background: Collection on Products application
    Given I am logged in as regular user
    When Open products app
    And Click on Add Collection

    Scenario: All panels are loaded
        Then I expect to see Main and Desciption panel are loaded

    Scenario: Main panel is open by default
        Then Main panel is expanded
        And Rest of the pannel are collapsed

    Scenario: Image can be uploaded
        When Upload an image
        Then Image is visible

    Scenario: Form validation works
        When Click on Save
        Then Required fields are highlited in red and visible