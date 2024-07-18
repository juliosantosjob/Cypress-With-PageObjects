import { ELEMENTS } from '../elements/register.element'
import HomePage from '../pages/home.page'

class RegisterPage {

    accessRegisterPage() {
        cy.get(ELEMENTS.buttonRegistDonation).click()
        cy.get(ELEMENTS.tagTitle)
            .should('have.text', 'Cadastro de ponto de doação')
    }

    fillForm(nome, email, cep, number, addressDetails) {
        cy.intercept(ELEMENTS.urlCep).as('postCep')
        cy.get(ELEMENTS.inputName).type(nome)
        cy.get(ELEMENTS.inputEmail).type(email)
        cy.get(ELEMENTS.inputCep).type(cep)
        cy.get(ELEMENTS.buttonSearchCep).click().wait('@postCep')
        cy.get(ELEMENTS.inputNumber).type(number)
        cy.get(ELEMENTS.inputAddressDetails).type(addressDetails)
        cy.get(ELEMENTS.imgCachorros).click()
    }

    submit() {
        cy.get(ELEMENTS.buttonSubmit).click()
    }

    verifyRegisterDonation(message) {
        cy.contains(ELEMENTS.tagTitle, message)
            .should('be.visible')
    }

    verifyError(error) {
        cy.contains(ELEMENTS.toastAlert, error)
            .should('be.visible')
    }

    goToRegisterPage() {
        HomePage.goToHome()
        this.accessRegisterPage()
    }
}

export default new RegisterPage()