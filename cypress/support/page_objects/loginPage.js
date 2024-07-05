export class LoginPage {
    constructor() {
        this.locators = {
            loginPage: '[href="/login"]',
            loginEmail: '[data-qa="login-email"]',
            loginPass: '[data-qa="login-password"]',
            loginButton: '[data-qa="login-button"]',
            errorMessage: '',
            logoutButton: '',
            deleteLink: '[href="/delete_account"]'
        }
    }
    visitLoginPage() {
        return cy.get(this.locators.loginPage).click();
    }
    getEmailField() {
        return cy.get(this.locators.loginEmail);
    }

    getPasswordField() {
        return cy.get(this.locators.loginPass);
    }

    getLoginButton() {
        return cy.get(this.locators.loginButton);
    }
    getErrorMessage() {
        return cy.get(this.locators.errorMessage);
    }
    getLogoutButton() {
        return cy.get(this.locators.logoutButton);
    }

    login(email, password) {
        this.getEmailField().type(email);
        this.getPasswordField().type(password);
        this.getLoginButton().click();
    }
    checkPageVisible() {
        cy.get('body').should('be.visible');
    }
    // enterEmail(email) {
    //     cy.get(this.locators.loginEmail).type(email);
    // }
    // enterPassword(password) {
    //     cy.get(this.locators.loginPass).type(password);
    // }
    // clickLoginButon() {
    //     cy.get(this.locators.loginButton).click();
    // }
    clickDeleteLink() {
        cy.get(this.locators.deleteLink).click();
    }
}

export const onLoginPage = new LoginPage();