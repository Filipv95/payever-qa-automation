// 
// products page
// productsPage.js
// 

const BasePage = require("./basePage");

class ProductPage extends BasePage.construtor {

// Selectors

    get addCollection_Button() { return $('//span[@class="item__button-content" and text()="Add Collection"]')}
    get addMedia_Button() { return $('//div[@class="button" and text()="Add Media"]')}

// Methods

}

module.exports = new ProductPage()