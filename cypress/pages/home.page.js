import { ELEMENTS_HOME } from "../elements/home.element"

class HomePage {

    goToHome() {
        cy.visit('/')
        cy.get(ELEMENTS_HOME.tagTitle).should('have.text',
            'Conectando corações, mudando vidas!')
    }
}

export default new HomePage()