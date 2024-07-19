import { ELM_REGISTER } from '../elements/register.element'
import { ELM_HOME } from '../elements/home.element'

import HomePage from '../pages/home.page'

class RegisterPage {

    accessRegisterPage() {
        cy.get(ELM_HOME.buttonRegistDonation).click()
        cy.get(ELEMENTS_HOME.tagTitle).should('have.text',
            'Cadastro de ponto de doação')
    }

    fillForm(point) {
        cy.intercept(ELM_REGISTER.urlCep).as('postCep')
        cy.get(ELM_REGISTER.inputName).type(point.name)
        cy.get(ELM_REGISTER.inputEmail).type(point.email)
        cy.get(ELM_REGISTER.inputCep).type(point.zipCode)
        cy.get(ELM_REGISTER.buttonSearchCep).click().wait('@postCep')
        cy.get(ELM_REGISTER.inputNumber).type(point.number)
        cy.get(ELM_REGISTER.inputAddressDetails).type(point.addressDetails)
        cy.get(ELM_REGISTER.imgCachorros).click()
    }

    submit() {
        cy.get(ELM_REGISTER.buttonSubmit).click()
    }

    verifyRegisterDonation(message) {
        cy.contains(ELM_REGISTER.tagTitle, message)
            .should('be.visible')
    }

    verifyError(error) {
        cy.contains(ELM_REGISTER.toastAlert, error)
            .should('be.visible')
    }

    goToRegisterPage() {
        HomePage.goToHome()
        this.accessRegisterPage()
    }
}

export default new RegisterPage()
