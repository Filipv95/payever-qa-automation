// 
// login page
// loginPage.js
// 

const BasePage = require("./basePage");

class LoginPage extends BasePage.construtor {

// Selectors

    get email_Field() { return $('//input[@id="mat-input-9"]') }  
    get password_Field() { return $('//input[@id="mat-input-10"]') }  
    get login_Button() { return $('//button[@type="submit"]') }  

// Methods



}

module.exports = new LoginPage()