/// <reference types="cypress" />


export class LoginPage{

    writeUserNameAndPassword(username, password){
        cy.get('#username').type(username)
        cy.get('#password').type(password)
    }

    clickLogin(){
        cy.get('.fa').click()
    }

    confirmWrongUsername(){
        cy.get('#flash').contains("Your username is invalid")
    }

    confirmWrongPassword(){
        cy.get('#flash').contains("Your password is invalid")
    }
}