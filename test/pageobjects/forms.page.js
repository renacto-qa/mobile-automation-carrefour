const BasePage = require('./base.page');

class FormsPage extends BasePage {

    get inputField() {
        return $('~text-input');
    }

    get dropdownField() {
        return $('android=new UiSelector().text("Select an item...")');
    }

    dropdownOption(optionText) {
        return $(`android=new UiSelector().text("${optionText}")`);
    }

    get activeButton() {
        return $('~button-Active');
    }

    get okButton() {
        return $('id=android:id/button1');
    }

    async ensureFormsScreen() {
        await this.waitForElement(this.inputField);
    }

    async fillForm(text, option) {
        await this.ensureFormsScreen();

        await this.inputField.setValue(text);

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Select an item..."))');

        await this.dropdownField.waitForDisplayed({ timeout: 10000 });
        await this.dropdownField.click();

        const optionElement = this.dropdownOption(option);
        await optionElement.waitForDisplayed({ timeout: 10000 });
        await optionElement.click();

        await this.activeButton.click();
        await this.okButton.click();
    }
}

module.exports = new FormsPage();