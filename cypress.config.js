const { defineConfig } = require("cypress");
//const cucumber = require("cypress-cucumber-preprocessor").default;


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'http://localhost:1337/conference/sessions',
    //specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      //on('file:preprocessor', cucumber());
    },
  },
});
