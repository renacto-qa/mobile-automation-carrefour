const BasePage = require('./base.page');

class LoginPage extends BasePage {

    // ===== LOCATORS =====

    get emailField() {
        return $('~input-email');
    }

    get passwordField() {
        return $('~input-password');
    }

    get loginButton() {
        return $('~button-LOGIN');
    }

    get okButton() {
        return $('id=android:id/button1');
    }

    get signUpLink() {
        return $('android=new UiSelector().text("Sign up")');
    }

    // ===== VALIDAÇÃO =====

    async ensureLoginScreen() {
        await this.waitForElement(this.emailField);
    }

    // ===== AÇÕES =====

    async login(email, password) {
        await this.ensureLoginScreen();
        await this.emailField.setValue(email);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }

    async tapLoginOnly() {
        await this.ensureLoginScreen();
        await this.loginButton.click();
    }

    async acceptPopup() {
        await this.okButton.click();
    }

    async openSignUp() {
        await this.ensureLoginScreen();
        await this.signUpLink.click();
    }
}

module.exports = new LoginPage();