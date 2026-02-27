const HomePage = require('../pageobjects/home.page');
const LoginPage = require('../pageobjects/login.page');

describe('Login Flow - WDIO Native App', () => {

    beforeEach(async () => {
        await HomePage.openLogin();
    });

    it('01 - Login realizado com sucesso', async () => {
        await LoginPage.login('test@webdriver.io', '12345678');
        await LoginPage.acceptPopup();
    });

    it('02 - Login não realizado - Senha inválida', async () => {
        await LoginPage.login('test@webdriver.io', '123');
    });

    it('03 - Login não realizado - Email inválido', async () => {
        await LoginPage.login('emailinvalido', '12345678');
    });

    it('04 - Login não realizado - Campos vazios', async () => {
        await LoginPage.tapLoginOnly();
    });
});