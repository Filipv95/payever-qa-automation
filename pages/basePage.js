// 
// base page
// basePage.js
// 

module.exports = class BasePage {
       
    getText(element){
        element.waitForDisplayed({timeout: 30000})
        const text = element.getText()
        return text
    }
    
    setValue(element, value){
        element.waitForDisplayed({timeout: 30000})
        element.setValue(value)
    }
    
    click(element){
        element.waitForDisplayed({ timeout: 30000 })
        element.click()
    }
    
    clearValue(element){
        element.waitForDisplayed({ timeout: 30000})
        element.clearValue()
    }
    
}