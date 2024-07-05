export class ProductPage {
    constructor() {
        this.locators = {
            productPage: '[href="/products"]',
            searchBox: '#search_product',
            searchButton: '#submit_search'
        }
    }
    visitProductPage() {
        return cy.get(this.locators.productPage).click();
    }
    searchProduct(key) {
        this.getSearchBox().type(key);
        this.getSearchButton().click();
    }
    getSearchBox() {
        return cy.get(this.locators.searchBox);
    }
    getSearchButton() {
        return cy.get(this.locators.searchButton);
    }
}

export const onProductPage = new ProductPage();