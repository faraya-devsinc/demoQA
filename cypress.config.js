module.exports = {
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],
    viewportHeight: 1080,
    viewportWidth: 1920,
    //Set view ports as per the device
    
  },
  //defaultCommandTimeout: 10000,
};
