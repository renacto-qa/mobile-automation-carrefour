exports.config = {
    runner: 'local',

    user: 'renatodesouzalim_e3OUzm',
    key: 'zmbXYCGzBmpyPYWfWrM9',

    specs: [
        './test/specs/**/*.js'
    ],

    // Suites organizadas
    suites: {
    smoke: [
        './test/specs/01-login.spec.js',
        './test/specs/02-cadastro.spec.js'
    ],
    regression: [
        './test/specs/01-login.spec.js',
        './test/specs/02-cadastro.spec.js',
        './test/specs/03-formularios.spec.js',
        './test/specs/04-navegacao.spec.js'
    ]
},

    maxInstances: 2,

    // Retry estratégico (anti-flaky cloud)
    specFileRetries: 1,
    specFileRetriesDelay: 5,
    specFileRetriesDeferred: true,

    capabilities: [
        {
            platformName: 'Android',
            'appium:platformVersion': '13.0',
            'appium:deviceName': 'Samsung Galaxy S23',
            'appium:automationName': 'UiAutomator2',
            'appium:app': 'bs://4a316baab5c1f2c872eb04c008482b5b4d699ee1',
            'appium:autoGrantPermissions': true,

            'bstack:options': {
                projectName: 'Carrefour Mobile Challenge',
                buildName: 'Android Real Device Build',
                sessionName: 'Android Tests',
                debug: true,
                networkLogs: true,
                consoleLogs: 'info'
            }
        }
    ],

    logLevel: 'info',

    framework: 'mocha',

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    },

    /**
     * Screenshot automático em caso de falha
     */
    afterTest: async function (test, context, { error }) {
        if (error) {
            await browser.takeScreenshot();
        }
    },

    /**
     * Hooks opcionais para organização futura
     */
    beforeSuite: function (suite) {
        console.log(`\n🚀 Iniciando Suite: ${suite.title}`);
    },

    afterSuite: function (suite) {
        console.log(`\n✅ Finalizada Suite: ${suite.title}`);
    },

    services: [],

    hostname: 'hub.browserstack.com',
    port: 443,
    protocol: 'https'
};