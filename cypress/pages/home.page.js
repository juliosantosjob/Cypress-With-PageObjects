import { ELM_HOME } from "../elements/home.element"

class HomePage {

    goToHome() {
        cy.visit('/')
        cy.get(ELM_HOME.tagTitle).should('have.text',
            'Conectando corações, mudando vidas!')
    }
}

export default new HomePage()
