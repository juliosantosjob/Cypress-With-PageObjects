
import { ELEMENTS } from "../elements/home.element"
class HomePage {

    goToHome() {
        cy.visit('/')
        cy.get(ELEMENTS.tagTitle)
            .should('have.text', 'Conectando corações, mudando vidas!')
    }
}

export default new HomePage()