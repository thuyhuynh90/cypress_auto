import { onProductPage } from '../support/page_objects/productPage.js';

describe('Product Page', () => {
    beforeEach('Open main page', () => {
        cy.visit('./');
    })
    it('Search product', () => {
        onProductPage.visitProductPage();
        onProductPage.searchProduct('tshirt');
        cy.get('.add-to-cart').eq(2).click();
    })
})