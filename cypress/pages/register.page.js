import { ELEMENTS_REGISTER } from '../elements/register.element'
import { ELEMENTS_HOME } from '../elements/home.element'

import HomePage from '../pages/home.page'

class RegisterPage {

    accessRegisterPage() {
        cy.get(ELEMENTS_REGISTER.buttonRegistDonation).click()
        cy.get(ELEMENTS_HOME.tagTitle).should('have.text',
            'Cadastro de ponto de doação')
    }

    fillForm(point) {
        cy.intercept(ELEMENTS_REGISTER.urlCep).as('postCep')
        cy.get(ELEMENTS_REGISTER.inputName).type(point.name)
        cy.get(ELEMENTS_REGISTER.inputEmail).type(point.email)
        cy.get(ELEMENTS_REGISTER.inputCep).type(point.zipCode)
        cy.get(ELEMENTS_REGISTER.buttonSearchCep).click().wait('@postCep')
        cy.get(ELEMENTS_REGISTER.inputNumber).type(point.number)
        cy.get(ELEMENTS_REGISTER.inputAddressDetails).type(point.addressDetails)
        cy.get(ELEMENTS_REGISTER.imgCachorros).click()
    }

    submit() {
        cy.get(ELEMENTS_REGISTER.buttonSubmit).click()
    }

    verifyRegisterDonation(message) {
        cy.contains(ELEMENTS_REGISTER.tagTitle, message)
            .should('be.visible')
    }

    verifyError(error) {
        cy.contains(ELEMENTS_REGISTER.toastAlert, error)
            .should('be.visible')
    }

    goToRegisterPage() {
        HomePage.goToHome()
        this.accessRegisterPage()
    }
}

export default new RegisterPage()