exports.config = {

    runner: 'local',

    specs: [
        './test/specs/**/*.js'
    ],

    exclude: [],

    maxInstances: 1, // executa sequencial

    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Android Emulator',
        'appium:platformVersion': '11.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': './apps/android.wdio.native.app.v2.0.0.apk',
        'appium:autoGrantPermissions': true,
        'appium:noReset': false,
        'appium:fullReset': false
    }],

    logLevel: 'info',

    bail: 0,

    waitforTimeout: 20000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    services: ['appium'],

    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    /**
     * 🔥 RECRIA A SESSÃO ANTES DE CADA SPEC
     */
    beforeSuite: async function () {
        await driver.reloadSession();
    }
};