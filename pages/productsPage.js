// 
// products page
// productsPage.js
// 

const BasePage = require("./basePage");
const path = require('path');
const { strictEqual } = require('assert')

class ProductPage extends BasePage {

// Selectors

    get addCollection_Button() { return $('//span[@class="item__button-content" and text()="Add Collection"]')}
    get addMedia_Button() { return $('//div[@class="button" and text()="Add Media"]')}
    get pictureInput_Button() { return $('//input[@accept="image/*"]') }
    get titleCollection_Field() { return $('//input[@placeholder="Title"]') }
    get doneCollection_Button() { return $('//button[@class="overlay__button"]')}
    get titleCollection_Text() { return $('//span[@class="label-text ng-star-inserted"]') }
    get mainTab_Text() { return $('//*[text()="Main"]') }
    get descriptionTab_Text() { return $('//*[text()="Description"]') }
    get mainPanelExpanded_Button() {return $('//*[text()="Main"]/../..')}
    get descriptionPanelCollapsed_Button() { return $('//*[text()="Description"]/../..') }
    get uploadedImage_Box() { return $('//img[@class="picture-main ng-star-inserted"]')}
    get invalidProductName_Box() { return $('//span[@class="message__text"]')}

// Methods

    addCollection() {
        this.click(this.addCollection_Button)
    }

    mainAndDescriptionTab() {
        const mainTab = this.getText(this.mainTab_Text)
        strictEqual(mainTab, "Main")
        const descriptionTab = this.getText(this.descriptionTab_Text)
        strictEqual(descriptionTab, "Description")
    }

    checkIfMainPanelExpanded() {
        const mainPanel = this.mainPanelExpanded_Button.getAttribute("aria-expanded")
        strictEqual(mainPanel, "true")
    }

    checkIfDescriptionPanelCollapsed() {
        const descriptionPanel = this.descriptionPanelCollapsed_Button.getAttribute("aria-expanded")
        strictEqual(descriptionPanel, "false")
    }

    addMedia() {
        // Upload photo
        this.click(this.addMedia_Button)
        browser.pause(3000)
        const MediaUpload = this.pictureInput_Button
        browser.execute(
            (el)=>el.setAttribute( 'style', "display: block !important" ),
            MediaUpload
        )
        const ImagePath = path.join(__dirname,'../support/pictures/image.jpg')
        const remoteImagePath = browser.uploadFile(ImagePath)
        this.pictureInput_Button.setValue(remoteImagePath)
    }

    checkImageVisibility() {
        this.uploadedImage_Box.waitForDisplayed()
        const pictureUploaded = this.uploadedImage_Box.isDisplayed().toString()
        strictEqual(pictureUploaded, "true")
    }

    checkRequiredTitleColor() {
        const titleColor = this.titleCollection_Text.getCSSProperty('color')
        const hexColor = JSON.parse(JSON.stringify(titleColor)).parsed.hex
        strictEqual(hexColor, "#eb4653")
    }

    checkRequiredException() {
        const invalidMessage = this.getText(this.invalidProductName_Box)
        strictEqual(invalidMessage, "Invalid product name")
    }

    clickOnSave() {
        this.click(this.doneCollection_Button)
    }

}

module.exports = new ProductPage()