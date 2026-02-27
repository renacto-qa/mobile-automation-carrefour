const BasePage = require('./base.page');

class CadastroPage extends BasePage {

    get loginIcon() {
        return $('~Login');
    }

    get signUpButton() {
        return $('~button-sign-up-container');
    }

    get emailField() {
        return $('~input-email');
    }

    get passwordField() {
        return $('~input-password');
    }

    get confirmPasswordField() {
        return $('~input-repeat-password');
    }

    get signUpSubmitButton() {
        return $('~button-SIGN UP');
    }

    errorMessage(message) {
        return $(`android=new UiSelector().text("${message}")`);
    }

    async openSignUp() {
        await this.loginIcon.click();
        await this.signUpButton.click();
    }

    async register(email, password, confirmPassword) {
        await this.emailField.setValue(email);
        await this.passwordField.setValue(password);
        await this.confirmPasswordField.setValue(confirmPassword);
        await this.signUpSubmitButton.click();
    }

    async validateError(message) {
        await this.errorMessage(message).waitForDisplayed({ timeout: 10000 });
    }
}

module.exports = new CadastroPage();