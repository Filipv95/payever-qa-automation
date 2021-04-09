// 
// login page
// loginPage.js
// 

const BasePage = require("./basePage");

class LoginPage extends BasePage {

// Selectors

    get email_Field() { return $('//input[@name="UserName"]') }  
    get password_Field() { return $('//input[@type="password"]') }
    get login_Button() { return $('//button[@type="submit"]') }  
    get chooseUser_Button() { return $('//div[contains(@class,"logo logo-placeholder")]/h2') }
    get otherAccount_Button() { return $('//button[@type="button"]')}

// Methods

    navigateToLogin() {
        browser.url('/')
}

    login(username, password) {
        this.login_Button.waitForDisplayed()
        if(this.otherAccount_Button.isDisplayed()) {
            this.click(this.otherAccount_Button)  
        } 

        this.setValue(this.email_Field, username)
        this.setValue(this.password_Field, password)
        this.click(this.login_Button)
}

    chooseUser() {
        this.click(this.chooseUser_Button)
    }


}

module.exports = new LoginPage()