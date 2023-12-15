/// <reference types="cypress" />


export class SecureAreaPage{

    confirmCorrectLogin(){
        cy.get('#flash').contains("You logged into a secure area!")
    }
}