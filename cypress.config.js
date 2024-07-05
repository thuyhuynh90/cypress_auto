const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  viewportHeight: 1080,
  viewportWidth: 1900,
  e2e: {
    baseUrl: 'https://automationexercise.com/',
    excludeSpecPattern: ['1-getting-started','2-advanced-examples'],
    specPattern:	'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
