class BasePage {

    async waitForElement(element) {
        await element.waitForDisplayed({ timeout: 20000 });
    }

    async click(element) {
        await element.waitForDisplayed({ timeout: 20000 });
        await element.click();
    }

    async scrollToElement(element) {

        try {
            await element.waitForDisplayed({ timeout: 5000 });
        } catch (error) {

            await driver.execute('mobile: scroll', {
                strategy: 'accessibility id',
                selector: element.selector.replace('~', '')
            });
        }
    }
}

module.exports = BasePage;