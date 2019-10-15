module.exports = {
    'abhilash Test': function (browser) {
      browser
        .url('https://www.ab-in-den-urlaub.de')
        //.waitForElementVisible('body')
        .maximizeWindow()
        .useXpath()
        .pause(5000)
        .click("//button[@id='CybotCookiebotDialogBodyButtonAccept']")
        .click("//label[@class='item-hotel']")
        .pause(5000)
        .setValue("//input[@id='base[searchTerm]']",'Madrid')
        .pause(6000)
        .keys(browser.Keys.ARROW_DOWN)
        .keys(browser.Keys.ENTER)
        .click("//form[@id='hotel']//div[@class='datepicker-input-wrapper datepicker-input-wrapper-start']//div[@class='datepicker-trigger']")
        //.click("//span[@class='month-button month-button-next icon-arrow-right-bold']")
        .click("//div[@class='month month-9 year-2019']//td[@class='day day-25'][contains(text(),'25')]")
        .pause(3000)
        .click("//div[@class='month month-9 year-2019']//td[@class='day day-29'][contains(text(),'29')]")
        .click("//form[@id='hotel']//input[@id='submit']")
        .pause(10000)
        .click("//span[@class='select-icon hc-icon-star-50']")
        .pause(5000)
        .click("//label[contains(@class,'filter-label rating-color5')]")
        .pause (5000)
        .click("//li[contains(text(),'Preis')]")
        .click("//li[contains(text(),'Preis')]")
        .pause(10000)

        
        }
  };