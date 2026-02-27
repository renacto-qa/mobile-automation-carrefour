exports.config = {
    runner: 'local',

    specs: [
        './test/specs/**/*.js'
    ],

    maxInstances: 1,

    capabilities: [{
        platformName: 'iOS',
        'appium:deviceName': 'iPhone 14',
        'appium:platformVersion': '16.0',
        'appium:automationName': 'XCUITest',

        // Caminho do app iOS (Simulator build)
        'appium:app': './apps/ios.simulator.wdio.native.app.app',

        'appium:noReset': false
    }],

    logLevel: 'info',

    framework: 'mocha',

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 90000
    },

    services: ['appium']
};