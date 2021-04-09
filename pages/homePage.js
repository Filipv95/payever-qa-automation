// 
// home page
// homePage.js
// 

const BasePage = require("./basePage");

class HomePage extends BasePage {

// Selectors

    get products_Button() { return $('//div[text()="Products"]/..') }
    get hamburger_Button() { return $('//button[contains(@class,"products-header-hamburger-icon")]') }  
    get logout_Button() { return $('//span[text()="Log Out"]/..') }

// Methods

    chooseProducts() {
        this.click(this.products_Button)
    }

    logout() {
        this.click(this.hamburger_Button)
        this.click(this.logOut_Button)
    }

}

module.exports = new HomePage()