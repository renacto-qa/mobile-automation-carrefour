const HomePage = require('../pageobjects/home.page');
const FormsPage = require('../pageobjects/forms.page');

describe('Preenchimento de Formulário', () => {

    beforeEach(async () => {
        await HomePage.openForms();
    });

    it('08 - Preenchimento de formulário realizado com sucesso', async () => {
        await FormsPage.fillForm('Teste', 'Appium is awesome');
    });
});