const { defineConfig } = require('cypress')

module.exports = defineConfig({
  component: {
    env: {
      REACT_APP_TITLE: 'How to test',
    },
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },

  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
