const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.baseUrl = "https://petlov.vercel.app";
      return config;
    },
  },
});
