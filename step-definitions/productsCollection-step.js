// 
// products collection step
// productsCollection-step.js
// 

const { Given, When, Then } = require('cucumber');
const data = require('../config/data/userData')
const loginPage = require('../pages/loginPage');
const homePage = require('../pages/homePage');
const productsPage = require('../pages/productsPage');


Given(/^I am logged in as regular user$/, () => {
	loginPage.navigateToLogin()
	loginPage.login(data.UserEmail, data.UserPassword)
	loginPage.chooseUser()
});

When(/^Open products app$/, () => {
	homePage.chooseProducts()
});

When(/^Click on Add Collection$/, () => {
	productsPage.addCollection()
});

Then(/^I expect to see Main and Desciption panel are loaded$/, () => {
	productsPage.mainAndDescriptionTab()
});

Then(/^Main panel is expanded$/, () => {
	productsPage.checkIfMainPanelExpanded()
});

Then(/^Rest of the pannel are collapsed$/, () => {
	productsPage.checkIfDescriptionPanelCollapsed()
});

When(/^Upload an image$/, () => {
	productsPage.addMedia()
});

Then(/^Image is visible$/, () => {
    productsPage.checkImageVisibility()
});

When(/^Click on Save$/, () => {
	productsPage.clickOnSave()
});

Then(/^Required fields are highlited in red and visible$/, () => {
	productsPage.checkRequiredTitleColor()
	productsPage.checkRequiredException()
});

