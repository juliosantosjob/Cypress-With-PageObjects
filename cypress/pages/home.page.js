class HomePage {

    goToHome() {
        // Visit the homepage of the site
        cy.visit('https://petlov.vercel.app')
        cy.get('h1').should('have.text', 'Conectando corações, mudando vidas!')
    }
}

export default new HomePage()