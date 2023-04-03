/// <reference types="cypress" /> 
//This line allows the aut-code completion from the cypress library

import 'cypress-file-upload'
//This is for uploading image using cypress , we also installed this via npm

const { e2e } = require("../../cypress.config");
// not a good practice to use in cy files
Cypress. on('uncaught:exception', (err, runnable) => { return false; });
//funtion() is same as () =>

    it('Fills entire practice form', () => {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.get('#firstName').type('Faraya');
        cy.get('#lastName').type('Faheem');
        cy.get('#userEmail').type('faraya.faheem@devsinc.com');
        cy.get('#genterWrapper > .col-md-9 > :nth-child(2)').click();
        cy.get('#userNumber').type('03235652348');
        cy.get('#dateOfBirthInput').click().get('.react-datepicker__year-select');
        cy.get('.subjects-auto-complete__value-container').type('Computer Science{enter}');
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click();
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').click();
        const p = 'images.png';
        cy.get('#uploadPicture').attachFile(p);
        cy.get('#currentAddress').type('Devsinc Tower, Ghazi Road');
        cy.get('#state > .css-yk16xz-control > .css-1hwfws3').click().get('#react-select-3-option-2').click();
        cy.get('#city > .css-yk16xz-control > .css-1hwfws3').click().get('#react-select-4-option-1').click();
        //cy.get('[Select City]').select(1).invoke("index").should("eq","Panipat");
        //cy.get('#react-select-3-option-2')
        cy.get('#submit').click();
        cy.get('#closeLargeModal').click();
    });
