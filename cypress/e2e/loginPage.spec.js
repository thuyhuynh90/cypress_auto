/// <reference types="cypress" />
import { onLoginPage } from '../support/page_objects/loginPage.js';

describe('Login Page tests', () => {
    beforeEach('Open main page', () => {
        cy.visit('./');
    })
    it('Homepage should be visible', () => {
        cy.url()
    })
    it.only('Login User with correct email and password', () => {
        // Check with UI web elements
        //Verify that home page is visible successfully
        onLoginPage.checkPageVisible();
        //Using users.json to login with multiple users
        cy.fixture('users.json').as('users');
        cy.get('@users').each(user => {
            //Click on 'Signup / Login' button
            onLoginPage.visitLoginPage();
            //Verify 'Login to your account' is visible
            onLoginPage.checkPageVisible();
            // //Enter correct email address and password and click Login button
            // const {email,password} = Cypress.env();

            onLoginPage.login(user.email, user.password);
            cy.get('body').should('contain', 'Logout')
            cy.get('[href="/logout"]').click();
            //Verify that 'Logged in as username' is visible
            onLoginPage.checkPageVisible();
            //Click 'Delete Account' button
            // onLoginPage.clickDeleteLink();
            // // Verify that 'ACCOUNT DELETED!' is visible
            // onLoginPage.checkPageVisible();

            /** //Check with API
            const requestParams = {
                name: 'John Doe2',
                email: 'johndwqw1@gmail.com',
                password: 'password123',
                title: 'Mr',
                birth_date: '15',
                birth_month: '05',
                birth_year: '1985',
                firstname: 'John',
                lastname: 'Doe',
                company: 'Acme Corp',
                address1: '123 Main Street',
                address2: 'Apartment 456',
                country: 'United States',
                zipcode: '12345',
                state: 'California',
                city: 'Los Angeles',
                mobile_number: '1234567890'
            }
            cy.request('POST', 'https://automationexercise.com/api/createAccount', requestParams).then(res => {
                expect(res.status).to.equal(200);
                expect(res.body).to.have.property('responseCode', '201');
                expect(res.body).to.have.property('message', 'User created!');
            }) */

        })
    })
    it('Login User with incorrect email and password', () => {
        cy.fixture('incorrect_users.json').as('incorrect_users');
        cy.get('@incorrect_users').each(user => {
            onLoginPage.visitLoginPage();
            onLoginPage.login(user.email, user.password);
            cy.get('body').should('contain', 'Your email or password is incorrect!')
        })
    })

    it('Search Product', () => {
        
    })
})