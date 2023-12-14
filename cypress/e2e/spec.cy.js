describe('Pruebas heroku app', () => {
  it('Login valid user and password', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("You logged into a secure area!")
  })

  it('Login invalid user and valid password', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("wrongUsername")
    cy.get('#password').type("SuperSecretPassword!!")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your username is invalid")
  })

  it('Login valid user and invalid password', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperWrongPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your password is invalid")
  })

  it('Login invalid user and password', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("wrongUsername")
    cy.get('#password').type("SuperWrongPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your username is invalid")
  })
})