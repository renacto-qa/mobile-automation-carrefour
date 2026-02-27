const HomePage = require('../pageobjects/home.page');

describe('Navegação entre telas', () => {

    //
    // 09 - Navegação para Swipe e executar realizado com sucesso
    //
    it('09 - Navegação para Swipe e executar realizado com sucesso', async () => {

        await HomePage.openSwipe();

        const swipeTitle = $('android=new UiSelector().text("Swipe horizontal")');
        await swipeTitle.waitForDisplayed({ timeout: 20000 });

        const isDisplayed = await swipeTitle.isDisplayed();

        expect(isDisplayed).toBe(true);
    });


    //
    // 10 - Navegação para Webview realizado com sucesso
    //
    it('10 - Navegação para Webview realizado com sucesso', async () => {

        await HomePage.openWebview();

        const webviewTitle = $('android=new UiSelector().text("Webview")');
        await webviewTitle.waitForDisplayed({ timeout: 20000 });

        const isDisplayed = await webviewTitle.isDisplayed();

        expect(isDisplayed).toBe(true);
    });

});