/// <reference types="cypress" />


export class MainPage{

    enterWebPage(){
        cy.visit('https://the-internet.herokuapp.com/')
    }

    clickFromAuth(){
        cy.get(':nth-child(21) > a').click()
    }
}