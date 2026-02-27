const BasePage = require('./base.page');

class HomePage extends BasePage {

    // ===== LOCATORS =====

    get loginIcon() {
        return $('~Login');
    }

    get formsIcon() {
        return $('~Forms');
    }

    get swipeIcon() {
        return $('~Swipe');
    }

    get webviewIcon() {
        return $('~Webview');
    }

    // ===== VALIDAÇÃO DE TELA =====

    async ensureHomeScreen() {
        await this.waitForElement(this.loginIcon);
    }

    // ===== NAVEGAÇÕES =====

    async openLogin() {
        await this.ensureHomeScreen();
        await this.loginIcon.click();
    }

    async openForms() {
        await this.ensureHomeScreen();
        await this.formsIcon.click();
    }

    async openSwipe() {
        await this.ensureHomeScreen();
        await this.swipeIcon.click();
    }

    async openWebview() {
        await this.ensureHomeScreen();
        await this.webviewIcon.click();
    }
}

module.exports = new HomePage();