Feature: Create a Article and Post the Article

    Background:

        Given Launch the Target URL


    Scenario: Sign Up and Create a Article and Post the Article

        Given User should be able to sign up
        Then  User should be able to sign in and sign out
        And   User should be able to post articles with all the inputs mentioned
        Then  User should be able to comment on any articles, favorite it


    Scenario: Filter the Based on Tags and Comment and edit the Article

        Then  User should be able to sign in and sign out
        And   Filter global feed based on tags