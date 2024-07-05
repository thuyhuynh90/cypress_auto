export class RegisterUser {
    constructor() {
        this.locators = {
            name: '[data-qa="signup-name"]',
            email: '[data-qa="signup-email"]',
            signupButton: '[data-qa="signup-button"]',
            ratioButtons: 'input[type="radio"]',
            password: '[type="password"]',
            loginPage: '[href="/login"]',
            selectDay: 'select#days',
            selectMonth: 'select#months',
            selectYear: 'select#years',
            newsletterCheckbox: 'input#newsletter',
            specialOffersCheckbox: 'input#optin',
            firstName: 'input#first_name',
            lastName: 'input#last_name',
            company: 'input#company',
            address1: 'input#address1',
            address2: 'input#address2',
            country: 'select#country',
            state: 'input#state',
            city: 'input#city',
            zipcode: 'input#zipcode',
            mobileNumber: 'input#mobile_number',
            createAccountButton: 'button[data-qa="create-account"]',
            registerSuccess: 'h2[data-qa="account-created"]',
            continueButton: '[data-qa="continue-button"]',
            deleteLink: '[href="/delete_account"]'
            // registerFail: 'h2[data-qa="account-created"]'
        }
    }
    visitLoginPage() {
        cy.get(this.locators.loginPage).click();
    }
    register(name, email) {
        this.getName().type(name);
        this.getEmail().type(email);
        this.getSignupButton().click();
    }
    enterAccountInfo(index, password, day, month, year) {
        this.getRatioButton().eq(index).check();
        this.getPassword().type(password);
        this.selectDate(day, month, year);
    }
    enterAddressInfo(firstName, lastName, company, address1, address2,
        country, state, city, zipcode, mobileNumber) {
        this.getFirstName().type(firstName);
        this.getLastName().type(lastName);
        this.getCompany(company).type(company);
        this.getAddress1(address1).type(address1);
        this.getAddress2(address2).type(address2);
        this.getCountry(country).select(country);
        this.getState(state).type(state);
        this.getCity(city).type(city);
        this.getZipcode(zipcode).type(zipcode);
        this.getMobileNumber(mobileNumber).type(mobileNumber);
        this.getCreateAccButton().click();
        // this.registerSuccessPage();
    }
    checkRegisterSuccess() {
        this.registerSuccessPage();
        this.checkPageVisible()
    }
    getName() {
        return cy.get(this.locators.name);
    }
    getEmail() {
        return cy.get(this.locators.email);
    }
    getPassword() {
        return cy.get(this.locators.password);
    }
    getRatioButton() {
        return cy.get(this.locators.ratioButtons);
    }
    selectDate(day, month, year) {
        cy.get(this.locators.selectDay).select(day);
        cy.get(this.locators.selectMonth).select(month);
        cy.get(this.locators.selectYear).select(year);
    }
    selectCheckBox(bool1, bool2) {
        this.checkNewsletter(bool1);
        this.checkSpecialOffers(bool2);
    }
    checkNewsletter(boolean) {
        return cy.get(this.locators.newsletterCheckbox).check({ force: boolean });
    }
    checkSpecialOffers(boolean) {
        return cy.get(this.locators.specialOffersCheckbox).check({ force: boolean });
    }
    getFirstName() {
        return cy.get(this.locators.firstName);
    }

    getLastName() {
        return cy.get(this.locators.lastName);
    }

    getCompany() {
        return cy.get(this.locators.company);
    }

    getAddress1() {
        return cy.get(this.locators.address1);
    }

    getAddress2() {
        return cy.get(this.locators.address2);
    }

    getCountry() {
        return cy.get(this.locators.country);
    }

    getState() {
        return cy.get(this.locators.state);
    }

    getCity() {
        return cy.get(this.locators.city);
    }

    getZipcode() {
        return cy.get(this.locators.zipcode);
    }

    getMobileNumber() {
        return cy.get(this.locators.mobileNumber);
    }
    getSignupButton() {
        return cy.get(this.locators.signupButton);
    }
    getCreateAccButton() {
        return cy.get(this.locators.createAccountButton);
    }
    clickContinueButton() {
        return cy.get(this.locators.continueButton).click();
    }
    clickDeleteLink() {
        return cy.get(this.locators.deleteLink).click();
    }
    registerSuccessPage() {
        return cy.get(this.locators.registerSuccess).should('contain','Account Created!');
    }
    checkPageVisible() {
        cy.get('body').should('be.visible');
    }
    clickDeleteLink() {
        cy.get(this.locators.deleteLink).click();
    }
}

export const onRegisterUser = new RegisterUser();