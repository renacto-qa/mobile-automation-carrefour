const cadastroPage = require('../pageobjects/cadastro.page');

describe('Cadastro Flow', () => {

    beforeEach(async () => {
        await driver.reloadSession();
    });

    it('05 - Cadastro realizado com sucesso', async () => {
        await cadastroPage.openSignUp();
        await cadastroPage.register(
            `teste${Date.now()}@email.com`,
            '12345678',
            '12345678'
        );
    });

    it('06 - Cadastro não realizado - Email inválido', async () => {
        await cadastroPage.openSignUp();
        await cadastroPage.register(
            'emailinvalido',
            '12345678',
            '12345678'
        );

        await cadastroPage.validateError('Please enter a valid email address');
    });

    it('07 - Cadastro não realizado - Senha divergente', async () => {
        await cadastroPage.openSignUp();
        await cadastroPage.register(
            'teste@email.com',
            '12345610',
            '12345678'
        );

        await cadastroPage.validateError('Please enter the same password');
    });

});