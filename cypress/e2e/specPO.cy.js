/// <reference types="cypress" />
import { MainPage } from "../page-objects/main-page";
import { LoginPage } from "../page-objects/login-page";
import { SecureAreaPage } from "../page-objects/secure-page";

describe('Pruebas heroku app', () => {

    
    const mainPage = new MainPage();
    const loginPage = new LoginPage();
    const secureAreaPage = new SecureAreaPage();

    beforeEach(() => {
        mainPage.enterWebPage();
        mainPage.clickFromAuth();
      });  

    it('Login valid user and password using methods', () => {
        loginPage.writeUserNameAndPassword("tomsmith", "SuperSecretPassword!");
        loginPage.clickLogin();
        secureAreaPage.confirmCorrectLogin();
    })
    
      it('Login invalid user and valid password', () => {
        loginPage.writeUserNameAndPassword("wrongUsername", "SuperSecretPassword!");
        loginPage.clickLogin();
        loginPage.confirmWrongUsername();
      })
    
      it('Login valid user and invalid password', () => {
        loginPage.writeUserNameAndPassword("tomsmith", "SuperWrongPassword!");
        loginPage.clickLogin();
        loginPage.confirmWrongPassword();
      })
    
      it('Login invalid user and password', () => {
        loginPage.writeUserNameAndPassword("wrongUsername", "SuperWrongPassword!");
        loginPage.clickLogin();
        loginPage.confirmWrongUsername();
      })
})
