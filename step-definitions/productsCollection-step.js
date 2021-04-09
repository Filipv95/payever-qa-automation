// 
// products page step
// productsPage-step.js
// 

const { Given, When, Then } = require('cucumber')


Given(/^I am logged in as regular user$/, () => {
	return true;
});

When(/^Open products app$/, () => {
	return true;
});

When(/^Click on Collections tab$/, () => {
	return true;
});

When(/^Click on Add Collection$/, () => {
	return true;
});

Then(/^I expect to see Main and Desciption panel are loaded$/, () => {
	return true;
});

Then(/^Main panel is expanded$/, () => {
	return true;
});

Then(/^Rest of the pannel are collapsed$/, () => {
	return true;
});

When(/^Upload an image$/, () => {
	return true;
});

Then(/^Image is visible$/, () => {
	return true;
});

When(/^Click on Save$/, () => {
	return true;
});

Then(/^Required fields are highlited in red and visible$/, () => {
	return true;
});

