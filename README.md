# demoQA
**Installation**

1. Clone this repository: git@github.com:faraya-devsinc/Parabank-Cypress.git
2. Navigate to the project directory: cd your-repo-name
3. Install the project dependencies: npm install
4. Install Cypress: npm install cypress --save -dev
5. To configure cypress, execute: npx cypress open

**Usage**

1. To run cypress in headless mode: npx cypress run
2. To run a specific test file, run the following command: npm run test -- --spec "path/to/test/file.spec.js"
3. To open the Cypress Test Runner and run tests interactively, run the following command: npx cypress open

**Test Scripts**

The test scripts are located in the cypress/e2e directory. There are separate files for each feature that is being tested. The tests cover the following scenarios:
1. Submitting Practice Form functionality
