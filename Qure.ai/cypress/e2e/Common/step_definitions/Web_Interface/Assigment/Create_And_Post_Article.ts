/// <reference types="cypress" />
import { And, Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { Main_Class } from "../../../../../pages/Commom_Function";
import signup from "../../../../../pages/signup";
import signin from "../../../../../pages/signin";
import New_Article from "../../../../../pages/New_Article";
import faker from "faker";

const signup_page = new Main_Class()

Given('Launch the Target URL', () => {

    cy.fixture("Sign_Up").then(function (data) {
        this.data = data;
        cy.visit(this.data[0].URL)
        cy.wait(2000)

    })
})

Given('User should be able to sign up', () => {

    cy.fixture("Sign_Up").then(function (data) {
        this.data = data;
        const name = faker.Name.firstName();
        const email = faker.Internet.email();
        signup_page.Get_Element(signup.Sign_Up(), 20);
        signup_page.Set_Element_Value(signup.Username_txtbox(), name)
        signup_page.Set_Element_Value(signup.Email_txtbox(), email)
        signup_page.Set_Element_Value(signup.Password_txtbox(), data[0].password)
        signup_page.Get_Element(signup.SignUP_btn(), 0)
        signup_page.Get_Element(signup.Settings_icon(), 0)
        signup_page.Get_Element(signup.Logout_btn(), 0)
    })


})

Then('User should be able to sign in and sign out', () => {

    cy.fixture("Sign_Up").then(function (data) {
        this.data = data;
        signup_page.Get_Element(signin.Sign_in_btn(), 0)
        signup_page.Set_Element_Value(signup.Email_txtbox(), data[0].email)
        signup_page.Set_Element_Value(signup.Password_txtbox(), data[0].password)
        signup_page.Get_Element(signup.SignUP_btn(), 0)
    })

})

And('User should be able to post articles with all the inputs mentioned', () => {

        cy.fixture("New_Article").then(function (data) {
        signup_page.Get_Element(New_Article.New_article_btn(), 0)
        signup_page.Set_Element_Value(New_Article.Article_title_txtbox(), data[0].ArticleTitle)
        signup_page.Set_Element_Value(New_Article.Article_about_txtbox(), data[0].AboutArticle)
        signup_page.Set_Element_Value(New_Article.Write_your_article_txtbox(), data[0].write_your_Article)
        signup_page.Set_Element_Value(New_Article.Enter_Tags_txtbox(), data[0].Tags)
        signup_page.Get_Element(New_Article.Publish_Article_btn(), 20)
    })

})

Then('User should be able to comment on any articles, favorite it', () => {
    signup_page.Get_Element(New_Article.Home_icon_btn(), 0)
    signup_page.Get_Element(New_Article.GlobalFeed_btn(), 0)
    signup_page.Get_Element_Index(New_Article.Favorite_btn(), 0);
    signup_page.Get_Element(New_Article.ReadMore_btn(), 20);
    signup_page.Set_Element_Value(New_Article.Enter_Comment_txtbox(), "Cypress is Good Tool")
    signup_page.Get_Element(signup.SignUP_btn(), 0)
    signup_page.Get_Element(New_Article.Home_icon_btn(), 0)
    signup_page.Get_Element(signup.Settings_icon(), 0)
    signup_page.Get_Element(signup.Logout_btn(), 0)
})

And('Filter global feed based on tags', () => {
    signup_page.Get_Element(New_Article.GlobalFeed_btn(), 500)
    cy.wait(1000);
    signup_page.Get_Element(New_Article.Implementation_Tag(), 300)
    cy.wait(2000);
    signup_page.Get_Element(New_Article.ReadMore_btn(), 20);
    cy.wait(1000);
    signup_page.Get_Element(New_Article.Follow_btn(), 500)
    cy.wait(1000);
    signup_page.Set_Element_Value(New_Article.Enter_Comment_txtbox(), "Implementation comment")
    signup_page.Get_Element(signup.SignUP_btn(), 0)

})