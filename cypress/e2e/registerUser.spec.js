/// <reference types="cypress" />
import { onRegisterUser } from '../support/page_objects/registerPage.js';
import { randomNumber } from '../support/utils.js';

describe('Register User', () => {
    beforeEach('Open main page', () => {
        cy.visit('./');
    })
    it('Check register user successfully', () => {
        // Verify that home page is visible successfully
        onRegisterUser.checkPageVisible();

        const name = `thuy${randomNumber}`;
        const email = `thuy${randomNumber}@gmail.com`;
        cy.log(name, email);
        onRegisterUser.visitLoginPage(); //Go to SignUp page
        // Wait for the login page to be displayed
        cy.url().should('include', '/login');

        onRegisterUser.register(name, email); //Enter name and email address and click SignUp button
        // onRegisterUser.register('thuy10', 'thuy10@gmail.com');
        //Verify that 'ENTER ACCOUNT INFORMATION' is visible
        onRegisterUser.checkPageVisible();

        onRegisterUser.enterAccountInfo(1, '123456', '10', '3', '2021'); //Fill details: Title, Name, Email, Password, Date of birth
        onRegisterUser.selectCheckBox(true, true); // Select checkbox 'Sign up for our newsletter!' and  'Receive special offers from our partners!'
        onRegisterUser.enterAddressInfo('Thuy02', 'Huynh02', 'N/A', '123', '345',
            'Canada', 'HCM', 'HCM', '700000', '0987654321');//Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number and click create
        
        //Check register sucess and this page is visible
        onRegisterUser.checkRegisterSuccess();

        //Clicking on Continue button
        onRegisterUser.clickContinueButton();
        //Verify that 'Logged in as username' is visible
        onRegisterUser.checkPageVisible();
        // //Click 'Delete Account' button
        // onRegisterUser.clickDeleteLink();
        // // Verify that 'ACCOUNT DELETED!' is visible
        // onRegisterUser.checkPageVisible();
    })
})